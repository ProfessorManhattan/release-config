import * as fs from 'node:fs'
import { customTransformer } from './custom-transformer'
import { DEFAULT_ASSETS_FILES, DEFAULT_PACKAGE_FILES, DEFAULT_RELEASE_RULES } from './defaults'
import { githubSuccessComment } from './github'
import { acquirePackage, acquireProjectType, acquireVariables } from './project'

const semanticExec = '@semantic-release/exec'

// Taskfile.yml
const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

// .variables.json
const variables = acquireVariables()
const releaseRules = variables.releaseRules ? variables.releaseRules : DEFAULT_RELEASE_RULES
const assets = variables.releaseAssets ? variables.releaseAssets : DEFAULT_ASSETS_FILES

// Package.json
const packageVariables = acquirePackage()
const files = packageVariables.files ? packageVariables.files : DEFAULT_PACKAGE_FILES

// GitHub
const githubOptions = {
  addReleases: 'bottom',
  assets,
  assignees: [],
  failComment: false,
  failTitle: false,
  labels: false,
  repositoryUrl: variables.repository.github,
  successComment: githubSuccessComment(repoType, repoSubType, variables, packageVariables)
}

// NPM
const npmPublish =
  packageVariables.files && packageVariables.files.length > 0 && (repoType === 'npm' || variables.npmPublish)

// Python
const pyPiPublish =
  packageVariables.files && packageVariables.files.length > 0 && (repoType === 'python' || variables.pyPiPublish)

// Docker
const dockerPublish = fs.existsSync('Dockerfile') && (repoType === 'docker' || variables.dockerPublish)
const dockerPlugin = [
  semanticExec,
  {
    prepareCmd: 'task docker:prepare',
    publishCmd: 'task docker:publish',
    verifyConditionsCmd: 'task docker:verify'
  }
]

// Go
const goPublish = repoType === 'go' && repoSubType === 'cli'
const goPlugin = [
  semanticExec,
  {
    prepareCmd: 'task go:goreleaser:build',
    publishCmd: 'task go:goreleaser:release',
    verifyConditionsCmd: 'task go:goreleaser:check'
  }
]

// Packer
const packerPublish = repoType === 'packer'
const packerPlugin = [
  semanticExec,
  {
    prepareCmd: 'task packer:prepare',
    publishCmd: 'task packer:publish',
    verifyConditionsCmd: 'task packer:verify'
  }
]

// Ansible
const ansiblePublish = repoType === 'ansible' && repoSubType === 'role'
const ansiblePlugin = [
  semanticExec,
  {
    prepareCmd: 'task ansible:prepare',
    publishCmd: 'task ansible:publish',
    verifyConditionsCmd: 'task ansible:verify'
  }
]

const plugins: any = [
  [
    '@semantic-release/commit-analyzer',
    {
      config: 'conventional-changelog-gitmoji-config',
      releaseRules
    }
  ],
  [
    '@semantic-release/release-notes-generator',
    {
      config: 'conventional-changelog-gitmoji-config'
    }
  ],
  [
    '@semantic-release/changelog',
    {
      changelogFile: 'docs/CHANGELOG.md',
      changelogTitle:
        '# Changelog\n\nAll notable changes to this project will be documented in this file. In order to maintain \
        this file through automation, all commits to this repository must adhere to the guidelines laid out by \
        [Conventional Commits](https://conventionalcommits.org).'
    }
  ],
  [
    '@semantic-release/npm',
    {
      npmPublish
    }
  ],
  'semantic-release-npm-deprecate-old-versions',
  [
    'semantic-release-python',
    {
      pypiPublish: pyPiPublish
    }
  ]
]

if (dockerPublish) {
  plugins.push(dockerPlugin)
}

if (goPublish) {
  plugins.push(goPlugin)
}

if (packerPublish) {
  plugins.push(packerPlugin)
}

plugins.push(
  [
    '@semantic-release/gitlab',
    {
      assets
    }
  ],
  ['semantic-release-gh', githubOptions],
  [
    '@semantic-release/git',
    {
      assets: files,
      // eslint-disable-next-line no-template-curly-in-string
      message: 'chore(release): version ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
)

if (ansiblePublish) {
  plugins.push(ansiblePlugin)
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins,
  writerOpts: { transform: customTransformer }
}
