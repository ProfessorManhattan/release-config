export const DEFAULT_RELEASE_RULES = [
  {
    release: 'patch',
    type: 'build'
  },
  {
    release: 'patch',
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
  }
]

export const DEFAULT_PACKAGE_FILES = [
  'README.md',
  'docs/CHANGELOG.md',
  'docs/CONTRIBUTING.md',
  'LICENSE',
  'package.json',
  'bin/',
  'dist/'
]

export const DEFAULT_ASSETS_FILES = [
  {
    label: 'Compiled source code (including package.json)',
    name: 'Source',
    path: ['bin/**', 'dist/**', 'package.json']
  }
]
