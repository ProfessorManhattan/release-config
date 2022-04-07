import { COMMIT_ASSETS, DEFAULT_ASSETS_FILES, DEFAULT_RELEASE_RULES } from './defaults'
import { githubSuccessComment } from './github'
import { acquirePackage, acquireProjectType, acquireVariables } from './project'

const semanticExec = '@semantic-release/exec'

// Taskfile.yml
const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

// .variables.json
const variables = acquireVariables()
const releaseRules = DEFAULT_RELEASE_RULES
const assets = variables.releaseAssets ? variables.releaseAssets : DEFAULT_ASSETS_FILES

// Package.json
const packageVariables = acquirePackage()
const { blueprint } = packageVariables

// Files to include, if changed, alongside the tagged commit
const assetsToCommit = COMMIT_ASSETS

// GitHub
const githubOptions = {
  addReleases: 'top',
  assets,
  assignees: [],
  failComment: false,
  failTitle: false,
  labels: false,
  repositoryUrl: blueprint.repository.github,
  successComment: githubSuccessComment(repoType, repoSubType, variables, packageVariables)
}

const npmPublish = repoType === 'npm' || blueprint.npmPublish

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const plugins: readonly any[] = [
  [
    semanticExec,
    {
      prepareCmd: 'task start release:build'
    }
  ],
  [
    '@semantic-release/commit-analyzer',
    {
      config: 'conventional-changelog-emoji-config',
      releaseRules
    }
  ],
  [
    '@semantic-release/release-notes-generator',
    {
      config: 'conventional-changelog-emoji-config'
    }
  ],
  [
    '@semantic-release/changelog',
    {
      changelogFile: 'docs/CHANGELOG.md',
      changelogTitle:
        '# Changelog\n\nAll notable changes to this project will be documented in this file. In order to maintain ' +
        'this file through automation, all commits to this repository must adhere to the guidelines laid out by ' +
        '[Conventional Commits](https://conventionalcommits.org) and the ' +
        '[Megabyte Labs Commit Guide](https://megabyte.space/docs/contributing/commits).'
    }
  ],
  [
    '@semantic-release/npm',
    {
      npmPublish,
      tarballDir: 'dist'
    }
  ],
  npmPublish ? 'semantic-release-npm-deprecate-old-versions' : [],
  [
    semanticExec,
    {
      analyzeCommitsCmd: 'task --silent release:analyze',
      failCmd: 'task release:fail',
      generateNotesCmd: 'echo "heyHEYheyHEY',
      prepareCmd: 'task release:prepare',
      publishCmd: 'task --silent release:publish',
      successCmd: 'task release:success',
      verifyConditionsCmd: 'task --silent release:verify:conditions',
      verifyReleaseCmd: 'task --silent release:verify:release'
    }
  ],
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
      assets: assetsToCommit,
      // eslint-disable-next-line no-template-curly-in-string
      message: 'chore(release): version ${nextRelease.version}\n\n${nextRelease.notes}'
    }
  ]
].filter((plugin) => plugin.length)

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
  plugins
}
