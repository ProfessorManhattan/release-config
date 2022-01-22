import { customTransformer } from './custom-transformer'
import { DEFAULT_ASSETS_FILES, DEFAULT_PACKAGE_FILES, DEFAULT_RELEASE_RULES } from './defaults'
import { githubSuccessComment } from './github'
import { acquirePackage, acquireProjectType, acquireVariables } from './project'

const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

const variables = acquireVariables()
const releaseRules = variables.releaseRules ? variables.releaseRules : DEFAULT_RELEASE_RULES

const packageVariables = acquirePackage()
const files = packageVariables.files ? packageVariables.files : DEFAULT_PACKAGE_FILES
const assets = variables.releaseAssets ? variables.releaseAssets : DEFAULT_ASSETS_FILES

const npmPublish =
  packageVariables.files && packageVariables.files.length > 0 && (repoType === 'npm' || variables.npmPublish)

const pyPiPublish =
  packageVariables.files && packageVariables.files.length > 0 && (repoType === 'python' || variables.pyPiPublish)

const githubOptions = {
  addReleases: 'bottom',
  assets,
  assignees: [],
  failComment: false,
  failTitle: false,
  labels: false,
  successComment: githubSuccessComment(repoType, repoSubType, variables, packageVariables)
}

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
  ],
  [
    '@semantic-release/exec',
    {
      prepareCmd: 'task docker:prepare',
      publishCmd: 'task docker:publish',
      verifyConditionsCmd: 'task docker:verify'
    }
  ],
  [
    '@semantic-release/gitlab',
    {
      assets
    }
  ],
  ['@semantic-release/github', githubOptions],
  [
    '@semantic-release/git',
    {
      assets: files,
      // eslint-disable-next-line no-template-curly-in-string
      message: 'chore(release): version ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
]

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins,
  writerOpts: { transform: customTransformer }
}

export default createConfig
