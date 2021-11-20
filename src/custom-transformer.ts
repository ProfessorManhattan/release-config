/* eslint-disable @typescript-eslint/no-explicit-any, functional/immutable-data, fp/no-mutation, max-lines-per-function, sonarjs/cognitive-complexity */

import { commitTypes } from './commit-types'

const COMMIT_HASH_LENGTH = 7

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
      note.title = 'Breaking changes'
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
      url += '/issues/'
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
