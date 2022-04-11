## Usage

To get started, you will need to add our configuration to your `package.json` with:

```shell
npm install --save-dev semantic-release-config
```

After that, you need to add your configuration to your `package.json`. A basic example that releases software whenever there is a new commit on the master branch would look like:

```json
{
  "name": "npmappname",
  "version": "0.0.14",
  ...
  "release": {
    "branches": [
      "master",
    ],
    "extends": "semantic-release-config"
  }
}
```

The above snippet inherits all the settings from this shared configuration and tells semantic-release to only run on the master branch.

**IMPORTANT**

As of right now, in order to use this configuration you have to include the `Taskfile.yml`, everything inside `.config/taskfiles`, and use our `.gitlab-ci.yml` as an example. We use **[Bodega](https://github.com/ProfessorManhattan/Bodega)** which is capable of automatically handling dependency installation at run-time and allowing us to stay DRY by writing build logic in one place (among many other things). So, unless you are willing to give Bodega a try, you should only use this shared configuration as a guide for now.

## Environment

semantic-release is intended to be run on a CI environment. It automates the entire process of releasing your latest software. With that said, you need to make sure your CI environment has the correct API keys and tokens so it can automatically publish to the various channels. The tokens you need to add to your environment if you decide to use this configuration are listed below:

{{plugins.semantic}}

## Example CI File

You can use any CI environment you wish to. semantic-release has a [CI example page](https://semantic-release.gitbook.io/semantic-release/recipes/ci-configurations). Your CI file might look something like this on GitLab CI:

```yml
---
stages:
    - test
    - release

before_script:
  - npm install

node:10:
  image: node:10
  stage: test
  script:
    - npm test

node:12:
  image: node:12
  stage: test
  script:
    - npm test

publish:
  image: node:12
  stage: release
  script:
    - npx semantic-release
```

## Further Reading

For further information, you should check out the [official semantic-release docs](https://semantic-release.gitbook.io/semantic-release/). If you are looking for something more slim and practical, you might want to consider checking out [other shareable configurations](https://semantic-release.gitbook.io/semantic-release/extending/shareable-configurations-list). This configuration is meant to be used in eco-systems where developers are deploying one codebase to many different channels. Some might prefer to use a slimmed-down configuration that only includes the minimum amount of `node_modules/`. We may find it easier to maintain a single configuration though.
