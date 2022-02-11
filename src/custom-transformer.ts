/* eslint-disable @typescript-eslint/no-explicit-any, functional/immutable-data, fp/no-mutation, max-lines-per-function, sonarjs/cognitive-complexity */

import { commitTypes } from './commit-types'

const COMMIT_HASH_LENGTH = 7
/*
 *{
 *  commit: 'commit',
 *  issue: 'issues',
 *  date: '2022-02-10',
 *  version: '3.9.4',
 *  host: 'https://gitlab.com',
 *  owner: 'megabyte-labs',
 *  repository: 'go/cli/bodega',
 *  previousTag: 'v3.9.3',
 *  currentTag: 'v3.9.4',
 *  linkCompare: 'v3.9.3',
 *  packageData: {
 *    private: false,
 *    name: 'go-bodega',
 *    version: '3.9.3',
 *    description: 'A gorgeous, feature-packed drop-in replacement for the go-task project',
 *    license: 'MIT',
 *    author: 'Brian Zalewski <[MASKED]> (https://megabyte.space)',
 *    homepage: 'https://megabyte.space',
 *    repository: {
 *      type: 'git',
 *      url: 'git+https://github.com/ProfessorManhattan/Bodega.git'
 *    },
 *    bugs: {
 *      email: 'help@megabyte.space',
 *      url: 'https://gitlab.com/megabyte-labs/go/cli/bodega/-/issues'
 *    },
 *    type: 'module',
 *    scripts: {
 *      build: 'task go:build',
 *      help: 'task --menu',
 *      postinstall: 'go-npm install',
 *      prepare: 'task common:husky',
 *      repair: 'bash <(curl -sS https://install.doctor/repair)',
 *      start: 'bash start.sh',
 *      test: 'task go:test',
 *      preuninstall: 'go-npm uninstall'
 *    },
 *    config: { commitizen: [Object] },
 *    dependencies: { 'go-npm': '^0.1.9' },
 *    optionalDependencies: {},
 *    devDependencies: {
 *      '@commitlint/config-conventional': '^16.0.0',
 *      '@washingtondc/development': 'latest',
 *      'cz-emoji-conventional': '^1.0.1',
 *      'eslint-config-strict-mode': 'latest',
 *      glob: '^7.2.0',
 *      'handlebars-helpers': '^0.10.0',
 *      'prettier-config-sexy-mode': 'latest',
 *      'semantic-release-config': 'latest'
 *    },
 *    keywords: [
 *      'automation',
 *      'cli',
 *      'go',
 *      'go-lang',
 *      'golang',
 *      'mblabs',
 *      'megabytelabs',
 *      'professormanhattan',
 *      'terminal',
 *      'washingtondc'
 *    ],
 *    engines: { node: '>=14.18.0' },
 *    publishConfig: {
 *      '@megabyte:registry': 'https://gitlab.com/api/v4/projects/28755315/packages/npm/',
 *      access: 'public'
 *    },
 *    blueprint: {
 *      binName: 'task',
 *      buildMain: 'cmd/task',
 *      build_command: 'go build -o dist/task cmd/task/task.go',
 *      build_command_output: './dist/task',
 *      currentBuildTag: 'v3.9.2',
 *      customPackageName: 'go-bodega',
 *      description: 'A gorgeous, feature-packed drop-in replacement for the go-task project',
 *      github_id: '',
 *      gitlab_group_id: '',
 *      gitlab_project_id: '28755315',
 *      group: 'go',
 *      name: 'Bodega',
 *      overview: '**Bodega** is a fork of [go-task](https://github.com/go-task/task) that adds powerful UX features and functional improvements while retaining backwards compatibility. For those of you who do not know, Task is a task runner / Make alternative written in Go. It allows you to define bash script snippets in YML files and provides some advanced features. Some of the features it includes is the ability to define dependencies, running tasks conditionally, caching values, and a built-in method of housing CLI documentation. **Bodega** takes go-task to the next level by improving the TUI experience and including features that allow you to use the project as a CLI-generator.',
 *      repository: [Object],
 *      slug: 'bodega',
 *      subgroup: 'cli',
 *      title: 'Bodega - An Invaluable Task Runner Known'
 *    },
 *    changelog: { displayTypes: [Array], showAuthor: true },
 *    commitlint: {
 *      extends: [Array],
 *      helpUrl: 'https://megabyte.space/docs/contributing/commits'
 *    },
 *    eslintConfig: {
 *      extends: 'eslint-config-strict-mode',
 *      ignorePatterns: [Array],
 *      rules: [Object]
 *    },
 *    funding: [ [Object], [Object] ],
 *    goBinary: {
 *      name: 'task',
 *      path: './bin',
 *      url: 'https://github.com/ProfessorManhattan/Bodega/releases/download/v3.9.3/Bodega-version-platform-arch.tar.gz'
 *    },
 *    ntl: { descriptions: [Object] },
 *    prettier: 'prettier-config-sexy-mode',
 *    release: { branches: [Array], extends: 'semantic-release-config' }
 *  },
 *  linkReferences: true
 *}
 *{
 *  commit: {
 *    long: '4f7d83ba22ddb097f33a7e29466d7211e2fba155',
 *    short: '4f7d83b'
 *  },
 *  tree: {
 *    long: 'd3d357ff5e7398ab298aeae56a03eab523980c5e',
 *    short: 'd3d357f'
 *  },
 *  author: {
 *    name: 'Megabyte',
 *    email: 'help@megabyte.space',
 *    date: 2022-02-03T02:16:33.000Z
 *  },
 *  committer: {
 *    name: 'Megabyte',
 *    email: 'help@megabyte.space',
 *    date: 2022-02-03T02:16:33.000Z
 *  },
 *  subject: 'testing Semantic',
 *  body: null,
 *  hash: '4f7d83ba22ddb097f33a7e29466d7211e2fba155',
 *  committerDate: 2022-02-03T02:16:33.000Z,
 *  message: '🐛 fix(testing): testing Semantic',
 *  gitTags: '',
 *  type: 'fix',
 *  scope: 'testing',
 *  ticket: null,
 *  merge: null,
 *  header: '🐛 fix(testing): testing Semantic',
 *  footer: null,
 *  notes: [],
 *  references: [],
 *  mentions: [],
 *  revert: null
 *}
 */
/**
 * Performs custom modification on the release commit styling
 * and formatting
 *
 * @param commit - The release commit
 * @param context - The `semantic-release` context
 * @returns The modified commit
 */
export function customTransformer(commit: any, context: any): any {
  const types: any = commitTypes
  if (commit.notes) {
    // eslint-disable-next-line unicorn/no-array-for-each
    commit.notes.forEach((note: any) => {
      note.title = 'Breaking Changes'
    })
  }

  if (types.types[commit.type] && (types.types[commit.type].changelog || (commit.notes && commit.notes.length > 0))) {
    // eslint-disable-next-line sonarjs/no-nested-template-literals
    commit.groupType = `${types.types[commit.type].emoji ? `${types.types[commit.type].emoji} ` : ''}${
      types.types[commit.type].title
    }`
  } else {
    // eslint-disable-next-line unicorn/no-null
    return null
  }

  if (commit.scope === '*') {
    commit.scope = ''
  }

  if (typeof commit.hash === 'string') {
    commit.shortHash = commit.hash.slice(0, COMMIT_HASH_LENGTH)
  }

  const references: any = []

  if (typeof commit.subject === 'string') {
    // eslint-disable-next-line functional/no-let
    let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl

    if (url) {
      url += context.host === 'https://gitlab.com' ? '/-/issues/' : '/issues/'
      // Issue URLs.
      // eslint-disable-next-line prefer-named-capture-group
      commit.subject = commit.subject.replace(/#(\d+)/gu, (_unused: any, issue: any) => {
        // eslint-disable-next-line fp/no-mutating-methods
        references.push(issue)

        return `[#${issue}](${url}${issue})`
      })
    }

    if (context.host) {
      // User URLs.
      // eslint-disable-next-line security/detect-unsafe-regex, prefer-named-capture-group
      commit.subject = commit.subject.replace(/\B@([\da-z](?:-?[\da-z]){0,38})/gu, `[@$1](${context.host}/$1)`)
    }
  }

  if (commit.references) {
    // Remove references that already appear in the subject
    commit.references = commit.references.filter((reference: any) => {
      if (!references.includes(reference.issue)) {
        return true
      }

      return false
    })
  }

  return commit
}
