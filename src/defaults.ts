import { CommitProfile } from 'git-cz-emoji'

export type CommitTypes =
  | 'build'
  | 'ci'
  | 'docs'
  | 'feat'
  | 'fix'
  | 'perf'
  | 'refactor'
  | 'revert'
  | 'style'
  | 'test'
  | 'wip'
  | 'chore'

export const COMMIT_ASSETS = [
  'go.sum',
  'go.mod',
  'README.md',
  'npm-shrinkwrap.json',
  'package.json',
  'package-lock.json',
  'pnpm-lock.yaml',
  'pyproject.toml',
  'poetry.lock',
  'setup.cfg',
  'setup.py',
  'docs'
]

export const DEFAULT_RELEASE_RULES = [
  ...(Object.keys(CommitProfile.types) as readonly CommitTypes[]).map((type: CommitTypes) => ({
    release: (CommitProfile as any).types[type].release,
    type
  })),
  {
    message: '*PATCH UPDATE*',
    release: 'patch'
  },
  {
    message: '*MINOR UPDATE*',
    release: 'minor'
  },
  {
    message: '*MAJOR UPDATE*',
    release: 'major'
  },
  {
    message: '*BREAKING CHANGE*',
    release: 'major'
  }
]

export const DEFAULT_ASSETS_FILES = [
  {
    path: ['dist/**']
  }
]
