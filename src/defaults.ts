export const COMMIT_ASSETS = [
  'npm-shrinkwrap.json',
  'package.json',
  'pnpm-lock.yaml',
  'pyproject.toml',
  'poetry.lock',
  'setup.cfg',
  'setup.py',
  'docs'
]

export const DEFAULT_RELEASE_RULES = [
  {
    release: false,
    type: 'build'
  },
  {
    release: false,
    type: 'ci'
  },
  {
    release: false,
    type: 'chore'
  },
  {
    release: false,
    type: 'docs'
  },
  {
    release: 'patch',
    type: 'fix'
  },
  {
    release: 'minor',
    type: 'feat'
  },
  {
    release: 'patch',
    type: 'refactor'
  },
  {
    release: 'patch',
    type: 'revert'
  },
  {
    release: 'patch',
    type: 'perf'
  },
  {
    release: false,
    type: 'style'
  },
  {
    release: false,
    type: 'test'
  },
  {
    message: 'PATCH UPDATE*',
    release: 'patch'
  },
  {
    message: 'MINOR UPDATE*',
    release: 'minor'
  },
  {
    message: 'MAJOR UPDATE*',
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
