export const DEFAULT_RELEASE_RULES = [
				{
					"type": "build",
					"release": "patch"
				},
				{
					"type": "ci",
					"release": "patch"
				},
				{
					"type": "chore",
					"release": false
				},
				{
					"type": "docs",
					"release": false
				},
        {
          "type": "fix",
          "release": "patch"
        },
        {
          "type": "feat",
          "release": "minor"
        },
				{
					"type": "refactor",
					"release": "patch"
				},
        {
          "type": "revert",
          "release": "patch"
        },
        {
          "type": "perf",
          "release": "patch"
        },
				{
					"type": "style",
					"release": false
				},
				{
					"type": "test",
					"release": false
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
  { path: ['bin/**', 'dist/**', 'package.json'], name: 'Source', label: 'Compiled source code (including package.json)' }
]
