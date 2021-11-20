/* eslint-disable no-template-curly-in-string */

import { customTransformer } from './custom-transformer'

const semanticConfig = {
  parserOpts: {
    mergeCorrespondence: ['id', 'source'],
    // eslint-disable-next-line prefer-named-capture-group
    mergePattern: /^Merge pull request #(\d+) from (.*)$/u
  },
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        preset: 'angular',
        releaseRules: [
          { release: 'patch', type: 'build' },
          { release: 'patch', type: 'ci' },
          { release: 'patch', type: 'chore' },
          { release: 'patch', type: 'docs' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', type: 'style' },
          { release: 'patch', type: 'test' }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
        },
        preset: 'angular',
        writerOpts: {
          commitsSort: ['scope', 'subject']
        }
      }
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
        changelogTitle:
          '# Changelog\n\nAll notable changes to this project will be documented in this file.' +
          ' See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines.'
      }
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          './.config/scripts/semantic/prepare.sh ${nextRelease.version} ${options.branch}' +
          ' ${commits.length} ${Date.now()}',
        verifyConditionsCmd: './.config/scripts/semantic/verify.sh'
      }
    ],
    [
      '@semantic-release/gitlab',
      {
        addReleases: 'bottom',
        assets: [{ label: 'Compiled Distribution', path: 'dist/**' }]
      }
    ],
    [
      '@semantic-release/github',
      {
        addReleases: 'bottom',
        assets: [{ label: 'Compiled Distribution', path: 'dist/**' }]
      }
    ],
    '@semantic-release/npm',
    [
      'semantic-release-npm-deprecate',
      {
        deprecations: [
          {
            message:
              "Version < ${nextRelease.version.split('.')[0]} is now deprecated. Please upgrade" +
              " to ^${nextRelease.version.split('.')[0]}.0.0.",
            version: "< ${nextRelease.version.split('.')[0]}"
          }
        ]
      }
    ],
    'semantic-release-pypi',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]'
      }
    ]
  ],
  releaseRules: [
    {
      release: 'patch',
      type: 'build'
    },
    {
      release: 'patch',
      type: 'ci'
    },
    {
      release: 'patch',
      type: 'chore'
    },
    {
      release: 'patch',
      type: 'docs'
    },
    {
      release: 'patch',
      type: 'refactor'
    },
    {
      release: 'patch',
      type: 'style'
    },
    {
      release: 'patch',
      type: 'test'
    }
  ],
  writerOpts: { transform: customTransformer }
}

// eslint-disable-next-line unicorn/prefer-module
module.exports = semanticConfig
