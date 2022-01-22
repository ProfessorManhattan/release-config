import { customTransformer } from './custom-transformer'
import { DEFAULT_PACKAGE_FILES, DEFAULT_RELEASE_RULES, DEFAULT_ASSETS_FILES } from './defaults'
import { acquireProjectType, acquireVariables, acquirePackage } from './project'
import { githubSuccessComment } from './github'

const taskfile = acquireProjectType()
const repoType = taskfile.vars.REPOSITORY_TYPE
const repoSubType = taskfile.vars.REPOSITORY_SUBTYPE

const variables = acquireVariables()
const releaseRules = variables.releaseRules ? variables.releaseRules : DEFAULT_RELEASE_RULES

const packageVars = acquirePackage()
const files = (packageVars.files ? packageVars.files : DEFAULT_PACKAGE_FILES)
const assets = variables.releaseAssets ? variables.releaseAssets : DEFAULT_ASSETS_FILES

const npmPublish = packageVars.files && packageVars.files.length && (repoType === 'npm' || variables.npmPublish);

const pyPiPublish = packageVars.files && packageVars.files.length && (repoType === 'python' || variables.pyPiPublish)

const githubOptions = {
    assets,
    failComment: false,
    failTitle: false,
    successComment: githubSuccessComment(repoType, repoSubType, variables, packageVars),
    labels: false,
    assignees: [],
    addReleases: "bottom"
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
        "changelogFile": "docs/CHANGELOG.md",
        "changelogTitle": "# Changelog\n\nAll notable changes to this project will be documented in this file. In order to maintain this file through automation, all commits to this repository must adhere to the guidelines laid out by [Conventional Commits](https://conventionalcommits.org)."
      }
    ],
    [
  '@semantic-release/npm',
  {
    "npmPublish": npmPublish
  }
],
'semantic-release-npm-deprecate-old-versions',
[
  'semantic-release-python',
  {
    "pypiPublish": pyPiPublish
  }
],
  [
			"@semantic-release/exec", // Docker
			{
				"verifyConditionsCmd": "task docker:verify",
				"prepareCmd": "task docker:prepare",
				"publishCmd": "task docker:publish"
			}
  ],
[
  '@semantic-release/gitlab',
  {
    assets // Re-visit: Add support for milestones feature
  }
],
[
  '@semantic-release/github',
  githubOptions
],
[
      '@semantic-release/git',
      {
        message: 'chore(release): version ${nextRelease.version}\n\n${nextRelease.notes}',
        assets: files
      }
    ]
]

/**
 * Add config logic here
 */
module.exports = {
  writerOpts: { transform: customTransformer },
  plugins
}
    "auto": "^10.32.3",

export default createConfig
