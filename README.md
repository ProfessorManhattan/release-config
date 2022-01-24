<!-- ⚠️ This README has been generated from the file(s) ".config/docs/blueprint-readme-config.md" ⚠️--><div align="center">
  <center>
    <a href="https://github.com/ProfessorManhattan/release-config">
      <img width="148" height="148" alt="Semantic Release Config logo" src="https://gitlab.com/megabyte-labs/npm/configs/release/-/raw/master/logo.png" />
    </a>
  </center>
</div>
<div align="center">
  <center><h1 align="center">Config: An Ambitious Semantic Release Config<i></i></h1></center>
  <center><h4 style="color: #18c3d1;">A configuration managed by <a href="https://megabyte.space" target="_blank">Megabyte Labs</a></h4><i></i></center>
</div>

<div align="center">
  <h4 align="center">
    <a href="website.homepage" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/release-config/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="chat_url" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="ProfessorManhattan/npm-release-config" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/release-config" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="website.npm_package/semantic-release-config" target="_blank">
      <img alt="Version: 0.0.2" src="https://img.shields.io/badge/version-0.0.2-blue.svg?cacheSeconds=2592000&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/release-config/commits/master" title="GitLab CI build status" target="_blank">
      <img alt="Build status" src="https://gitlab.com/megabyte-labs/npm/release-config/badges/master/pipeline.svg">
    </a>
    <a href="website.npm_package/semantic-release-config" title="Dependency status reported by Depfu">
      <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/npm-release-config?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/semantic-release-config" title="Zip file size">
      <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/semantic-release-config?style=bad_style&logo=npm" />
    </a>
    <a href="" title="Total downloads of semantic-release-config on npmjs.org">
      <img alt="Total downloads of semantic-release-config on npmjs.org" src="https://img.shields.io/npm/dt/semantic-release-config?logo=npm&style=for-the-badge&logo=npm" />
    </a>
    <a href="website.npm_package/semantic-release-config" title="Number of vulnerabilities from Snyk scan on semantic-release-config">
      <img alt="Number of vulnerabilities from Snyk scan on semantic-release-config" src="https://img.shields.io/snyk/vulnerabilities/npm/semantic-release-config?style=for-the-badge&logo=npm" />
    </a>
    <a href="website.documentation/npm" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style=for-the-badge" />
    </a>
    <a href="https://gitlab.com/megabyte-labs/npm/release-config/-/raw/master/LICENSE" target="_blank">
      <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg?style=for-the-badge" />
    </a>
  </p>
</div>

> </br><h3 align="center">**Bundles together an ambitious semantic-release shared configuration used across many project types**</h3></br>

<a href="#table-of-contents" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Contributing](#contributing)
- [License](#license)

<a href="#overview" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Overview

[semantic-release](https://www.npmjs.com/package/semantic-release) automates the process of releasing packages to a wide variety of target eco-systems. This package bundles together the dependencies required for automatically releasing assets for the following project types:

- **NPM**: Publishes to npmjs.org
- **GitLab**: Publishes to GitLab Releases
- **GitHub**: Publishes to GitHub Releases
- **PyPi**: Publishes Python projects to pypi.org
- **Docker**: Publishes to DockerHub or a registry of your choice
- **VagrantUp**: Builds VMs with Packer and then publishes them to VagrantUp
- **Go**: Uses GitHub/GitLab Releases
- **Ansible**: Publishes Ansible roles to Ansible Galaxy

The configuration can be easily modified to accomodate your specific needs (like most semantic-release shared configurations). A good amount of the actual logic for verifying and compiling assets in this particular configuration is housed in our Taskfile.yml file. The [Taskfile.yml project](https://taskfile.dev/#/) is awesome project you should totally check out. We even created a more flavorful variant called [Bodega](https://github.com/ProfessorManhattan/Bodega).

<a href="#requirements" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Requirements

- **[Node.js >14.18.0](repository.project.node)**
- **[Python >3.10.0](repository.project.python)**

{{ load:docs/partials/guide.md }}

<a href="#contributing" style="width:100%"><img style="width:100%" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/png/aqua-divider.png" /></a>

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ProfessorManhattan/release-config/issues). If you would like to contribute, please take a look at the [contributing guide](https://github.com/ProfessorManhattan/release-config/blob/master/CONTRIBUTING.md).

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
