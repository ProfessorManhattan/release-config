import { commitTypes } from "./commit-types";

const COMMIT_HASH_LENGTH = 7

const customTransformer = (commit, context) => {
  const types = commitTypes
	if (commit.notes) {
		commit.notes.forEach(note => {
			note.title = 'Breaking changes';
		});
	}

	if (types.types[commit.type] && (types.types[commit.type].changelog || (commit.notes && commit.notes.length > 0))) {
		commit.groupType = `${types.types[commit.type].emoji ? `${types.types[commit.type].emoji} ` : ''}${
			types.types[commit.type].title
		}`;
	} else {
		return null;
	}

	if (commit.scope === '*') {
		commit.scope = '';
	}

	if (typeof commit.hash === 'string') {
		commit.shortHash = commit.hash.slice(0, COMMIT_HASH_LENGTH);
	}

	const references = [];

	if (typeof commit.subject === 'string') {
		let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl;

		if (url) {
			url += '/issues/';
			// Issue URLs.
			commit.subject = commit.subject.replace(/#(\d+)/g, (_, issue) => {
				references.push(issue);
				return `[#${issue}](${url}${issue})`;
			});
		}

		if (context.host) {
			// User URLs.
			commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/g, `[@$1](${context.host}/$1)`);
		}
	}

	if (commit.references) {
		// Remove references that already appear in the subject
		commit.references = commit.references.filter(reference => {
			if (!references.includes(reference.issue)) {
				return true;
			}

			return false;
		});
	}

	return commit;
};

module.exports = {
  releaseRules: [
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
      "release": "patch"
    },
    {
      "type": "docs",
      "release": "patch"
    },
    {
      "type": "refactor",
      "release": "patch"
    },
    {
      "type": "style",
      "release": "patch"
    },
    {
      "type": "test",
      "release": "patch"
    }
  ],
	parserOpts: {
		mergePattern: /^Merge pull request #(\d+) from (.*)$/,
		mergeCorrespondence: ["id", "source"]
	},
  writerOpts: { transform: customTransformer },
  plugins: [
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        { type: 'build', release: 'patch' },
        { type: 'ci', release: 'patch' },
        { type: 'chore', release: 'patch' },
        { "type": "docs", "release": "patch" },
        { "type": "refactor", "release": "patch" },
        { "type": "style", "release": "patch" },
        { type: 'test', release: 'patch' }
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      }
    }],
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "commitsSort": ["scope", "subject"]
      }
    }],
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md",
      "changelogTitle": "# Changelog\n\nAll notable changes to this project will be documented in this file. See\n[Conventional Commits](https://conventionalcommits.org) for commit guidelines."
    }],
    ["@semantic-release/exec", {
      "verifyConditionsCmd": "./.config/scripts/semantic/verify.sh",
      "prepareCmd": "./.config/scripts/semantic/prepare.sh ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}"
    }],
    ["@semantic-release/gitlab", {
      "assets": [
        { "path": "dist/**", "label": "Compiled Distribution" }
      ],
      "addReleases": "bottom"
    }],
    ["@semantic-release/github", {
      "assets": [
        { "path": "dist/**", "label": "Compiled Distribution" }
      ],
      "addReleases": "bottom"
    }],
    "@semantic-release/npm",
    ["semantic-release-npm-deprecate", {
      "deprecations": [
        {
          "version": "< ${nextRelease.version.split('.')[0]}",
          "message": "Version < ${nextRelease.version.split('.')[0]} is now deprecated. Please upgrade to ^${nextRelease.version.split('.')[0]}.0.0."
        }
      ]
    }],
    "semantic-release-pypi",
    ["@semantic-release/git", { assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'], "message": "chore(release): ${nextRelease.version} [skip ci]" }]
  ]
}
