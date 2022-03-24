<!-- ⚠️ This README has been generated from the file(s) ".config/docs/blueprint-readme-config.md" ⚠️--><div align="center">
  <center>
    <a href="https://github.com/megabyte-labs/semantic-release-config">
      <img width="148" height="148" alt="Semantic Release Config logo" src="https://gitlab.com/megabyte-labs/npm/configs/release/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center"><i></i>An Ambitious Semantic Release Config<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A configuration managed by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <a href="https://megabyte.space" title="Megabyte Labs homepage" target="_blank">
    <img alt="Homepage" src="https://img.shields.io/website?down_color=%23FF4136&down_message=Down&label=Homepage&logo=home-assistant&logoColor=white&up_color=%232ECC40&up_message=Up&url=https%3A%2F%2Fmegabyte.space&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/semantic-release-config/blob/master/docs/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
    <img alt="Contributing" src="https://img.shields.io/badge/Contributing-Guide-0074D9?logo=github-sponsors&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://app.slack.com/client/T01ABCG4NK1/C01NN74H0LW/details/" title="Chat with us on Slack" target="_blank">
    <img alt="Slack" src="https://img.shields.io/badge/Slack-Chat-e01e5a?logo=slack&logoColor=white&style=for-the-badge" />
  </a>
  <a href="https://github.com/megabyte-labs/semantic-release-config" title="GitHub mirror" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/badge/Mirror-GitHub-333333?logo=github&style=for-the-badge" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/npm/configs/release" title="GitLab repository" target="_blank">
    <img alt="GitLab" src="https://img.shields.io/badge/Repo-GitLab-fc6d26?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHJJREFUCNdNxKENwzAQQNEfWU1ZPUF1cxR5lYxQqQMkLEsUdIxCM7PMkMgLGB6wopxkYvAeI0xdHkqXgCLL0Beiqy2CmUIdeYs+WioqVF9C6/RlZvblRNZD8etRuKe843KKkBPw2azX13r+rdvPctEaFi4NVzAN2FhJMQAAAABJRU5ErkJggg==&style=for-the-badge" />
  </a>
</div>
<br/>
<div align="center">
  <a href="https://www.npmjs.com/package/semantic-release-config" title="Version 1.1.21" target="_blank">
    <img alt="Version: 1.1.21" src="https://img.shields.io/badge/version-1.1.21-blue.svg?cacheSeconds=2592000&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACNJREFUCNdjIACY//+BEp9hhM3hAzYQwoBIAqEDYQrCZLwAAGlFKxU1nF9cAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
  <a href="https://gitlab.com/megabyte-labs/npm/configs/release/-/commits/master" title="GitLab CI build status" target="_blank">
    <img alt="Build status" src="https://img.shields.io/gitlab/pipeline-status/megabyte-labs/npm/config/release-config?branch=master&label=build&logo=gitlab&logoColor=white&style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/semantic-release-config" title="Dependency status reported by Depfu" target="_blank">
    <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/semantic-release-config?logo=codeforces&logoColor=white&style=flat-square&logo=npm" />
  </a>
  <a href="https://www.npmjs.com/package/semantic-release-config" title="Zip file size" target="_blank">
    <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/semantic-release-config?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://www.npmjs.com/package/semantic-release-config" title="Total downloads of semantic-release-config on npmjs.org" target="_blank">
    <img alt="Total downloads of semantic-release-config on npmjs.org" src="https://img.shields.io/npm/dt/semantic-release-config?style=flat-square&logo=npm&logoColor=white" />
  </a>
  <a href="https://snyk.io/advisor/npm-package/semantic-release-config" title="Number of vulnerabilities from Snyk scan on semantic-release-config" target="_blank">
    <img alt="Number of vulnerabilities from Snyk scan on semantic-release-config" src="https://img.shields.io/snyk/vulnerabilities/npm/semantic-release-config?style=flat-square&logo=snyk&logoColor=white" />
  </a>
  <a href="website.documentation/npm" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&logoColor=white&style=flat-square" />
  </a>
  <a href="https://github.com/megabyte-labs/semantic-release-config/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAHpJREFUCNdjYOD/wMDAUP+PgYHxhzwDA/MB5gMM7AwMDxj4GBgKGGQYGCyAEEgbMDDwAAWAwmk8958xpIOI5zKH2RmOyhxmZjguAiKmgIgtQOIYmFgCIp4AlaQ9OczGkJYCJEAGgI0CGwo2HmwR2Eqw5SBnNIAdBHYaAJb6KLM15W/CAAAAAElFTkSuQmCC&style=flat-square" />
  </a>
</div>

> </br><h4 align="center">**Bundles together an ambitious semantic-release shared configuration used across many project types**</h4></br>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
  - [Developer Requirements](#developer-requirements)
- [Usage](#usage)
- [Environment](#environment)
- [Example CI File](#example-ci-file)
- [Further Reading](#further-reading)
- [Contributing](#contributing)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

[semantic-release](https://www.npmjs.com/package/semantic-release) automates the process of releasing packages to a wide variety of target eco-systems. This package bundles together the dependencies required for automatically releasing assets for the following project types:

- **NPM**: Publishes to npmjs.org
- **GitLab**: Publishes to GitLab Releases
- **GitHub**: Publishes to GitHub Releases
- **PyPi**: Publishes Python projects to pypi.org (`pyproject.toml` and `setup.py`/`setup.cfg` supported)
- **Docker**: Publishes to DockerHub or a registry of your choice
- **VagrantUp**: Builds VMs with Packer and then publishes them to VagrantUp
- **Go**: Uses GitHub/GitLab Releases
- **Ansible**: Publishes Ansible roles to Ansible Galaxy

The configuration can be easily modified to accomodate your specific needs (like most semantic-release shared configurations). A good amount of the actual logic for verifying and compiling assets in this particular configuration is housed in our Taskfile.yml file. The [Taskfile.yml project](https://taskfile.dev/#/) is an incredibly useful project you should check out. It helps combine bash script snippets into useful flows, with dependency management and caching capabilities. We even created a more flavorful variant called **[Bodega](https://github.com/ProfessorManhattan/Bodega)**.

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

If you are simply including this library in your project, all you need is a recent version of Node.js. **[Node.js >14.18.0](repository.project.node)** is sometimes required and is the only version range we actively support. Albeit, it is highly probable that lower versions will work as well depending on the requirements that this project imports.

### Developer Requirements

The following versions of Node.js and Python are required for development:

- **[Node.js >14.18.0](repository.project.node)**
- **[Python >3.10.0](repository.project.python)**

Other versions may work, but only the above versions are supported. Most development dependencies are installed automatically by our `Taskfile.yml` set-up (even Node.js and Python). Run `bash start.sh` to install **[Bodega](https://github.com/ProfessorManhattan/Bodega)** (an improved fork of [go-task](https://github.com/go-task/task)) and run the initialization sequence. The taskfiles will automatically install dependencies as they are needed, based on what development tasks you are running. For more information, check out the [CONTRIBUTING.md](https://github.com/megabyte-labs/semantic-release-config/blob/main/docs/CONTRIBUTING.md) or simply run:

```shell
npm run help
```

`npm run help` will ensure Bodega is installed and then open an interactive dialog where you can explore and learn about various developer commands.

<a href="#usage" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

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

<a href="#environment" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Environment

semantic-release is intended to be run on a CI environment. It automates the entire process of releasing your latest software. With that said, you need to make sure your CI environment has the correct API keys and tokens so it can automatically publish to the various channels. The tokens you need to add to your environment if you decide to use this configuration are listed below:

plugins.semantic

<a href="#example-ci-file" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

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

<a href="#further-reading" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Further Reading

For further information, you should check out the [official semantic-release docs](https://semantic-release.gitbook.io/semantic-release/). If you are looking for something more slim and practical, you might want to consider checking out [other shareable configurations](https://semantic-release.gitbook.io/semantic-release/extending/shareable-configurations-list). This configuration is meant to be used in eco-systems where developers are deploying one codebase to many different channels. Some might prefer to use a slimmed-down configuration that only includes the minimum amount of `node_modules/`. We may find it easier to maintain a single configuration though.

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/megabyte-labs/semantic-release-config/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/megabyte-labs/semantic-release-config/blob/master/docs/CONTRIBUTING.md).

<details>
<summary><b>Sponsorship</b></summary>
<br/>
<blockquote>
<br/>
Dear Awesome Person,<br/><br/>
I create open source projects out of love. Although I have a job, shelter, and as much fast food as I can handle, it would still be pretty cool to be appreciated by the community for something I have spent a lot of time and money on. Please consider sponsoring me! Who knows? Maybe I will be able to quit my job and publish open source full time.
<br/><br/>Sincerely,<br/><br/>

**_Brian Zalewski_**<br/><br/>

</blockquote>

<a title="Support us on Open Collective" href="https://opencollective.com/megabytelabs" target="_blank">
  <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=opencollective&label=OpenCollective&logoColor=white&style=for-the-badge" />
</a>
<a title="Support us on GitHub" href="https://github.com/ProfessorManhattan" target="_blank">
  <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/ProfessorManhattan?label=GitHub%20sponsors&logo=github&style=for-the-badge" />
</a>
<a href="https://www.patreon.com/ProfessorManhattan" title="Support us on Patreon" target="_blank">
  <img alt="Patreon" src="https://img.shields.io/badge/Patreon-Support-052d49?logo=patreon&logoColor=white&style=for-the-badge" />
</a>

</details>

<a href="#license" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## License

Copyright © 2020-2021 [Megabyte LLC](https://megabyte.space). This project is [MIT](https://gitlab.com/megabyte-labs/npm/configs/release/-/blob/master/LICENSE) licensed.
