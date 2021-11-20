<div align="center">
  <h4 align="center">
    <a href="{{ website.homepage }}" title="Megabyte Labs homepage" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/home-solid.svg" />
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="{{ pkg.name }} package on npmjs.org" target="_blank">
      <img height="50" src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/npm.svg" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/-/blob/master/CONTRIBUTING.md" title="Learn about contributing" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/contributing-solid.svg" />
    </a>
    <a href="{{ profile.patreon }}" title="Support us on Patreon" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/support-solid.svg" />
    </a>
    <a href="{{ chat_url }}" title="Slack chat room" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/chat-solid.svg" />
    </a>
    <a href="{{ profile.github }}/npm-{{ slug }}" title="GitHub mirror" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/github-solid.svg" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}" title="GitLab repository" target="_blank">
      <img src="https://gitlab.com/megabyte-labs/assets/-/raw/master/svg/gitlab-solid.svg" />
    </a>
  </h4>
  <p align="center">
    <a href="{{ website.npm_package }}/{{ pkg.name }}" target="_blank">
      <img alt="Version: {{ pkg.version }}" src="https://img.shields.io/badge/version-{{ pkg.version }}-blue.svg?cacheSeconds=2592000&style={{ badge_style }}" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/commits/master" title="GitLab CI build status" target="_blank">
      <img alt="Build status" src="{{ repository.group.npm }}/{{ slug }}/badges/master/pipeline.svg">
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Dependency status reported by Depfu">
      <img alt="Dependency status reported by Depfu" src="https://img.shields.io/depfu/megabyte-labs/npm-{{ slug }}?style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Zip file size">
      <img alt="Zip file size" src="https://img.shields.io/bundlephobia/minzip/{{ pkg.name }}?style={{ bad_style }}&logo=npm" />
    </a>
    <a href="" title="Total downloads of {{ pkg.name }} on npmjs.org">
      <img alt="Total downloads of {{ pkg.name }} on npmjs.org" src="https://img.shields.io/npm/dt/{{ pkg.name }}?logo=npm&style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.npm_package }}/{{ pkg.name }}" title="Number of vulnerabilities from Snyk scan on {{ pkg.name }}">
      <img alt="Number of vulnerabilities from Snyk scan on {{ pkg.name }}" src="https://img.shields.io/snyk/vulnerabilities/npm/{{ pkg.name }}?style={{ badge_style }}&logo=npm" />
    </a>
    <a href="{{ website.documentation }}/npm" target="_blank">
      <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?logo=readthedocs&style={{ badge_style }}" />
    </a>
    <a href="{{ repository.group.npm }}/{{ slug }}/-/raw/master/LICENSE" target="_blank">
      <img alt="License: {{ license }}" src="https://img.shields.io/badge/license-{{ license }}-yellow.svg?style={{ badge_style }}" />
    </a>
    <a href="{{ profile.opencollective }}" title="Support us on Open Collective" target="_blank">
      <img alt="Open Collective sponsors" src="https://img.shields.io/opencollective/sponsors/megabytelabs?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAElBMVEUAAACvzfmFsft4pfD////w+P9tuc5RAAAABHRSTlMAFBERkdVu1AAAAFxJREFUKM9jgAAXIGBAABYXMHBA4yNEXGBAAU2BMz4FIIYTNhtFgRjZPkagFAuyAhGgHAuKAlQBCBtZB4gzQALoDsN0Oobn0L2PEUCoQYgZyOjRQFiJA67IRrEbAJImNwFBySjCAAAAAElFTkSuQmCC&label=Open%20Collective%20sponsors&style={{ badge_style }}" />
    </a>
    <a href="{{ profile.github }}" title="Support us on GitHub" target="_blank">
      <img alt="GitHub sponsors" src="https://img.shields.io/github/sponsors/{{ profile.github_user }}?label=GitHub%20sponsors&logo=github&style={{ badge_style }}" />
    </a>
    <a href="{{ profile.github }}" target="_blank">
      <img alt="GitHub: {{ profile.github_user }}" src="https://img.shields.io/github/followers/{{ profile.github_user }}?style=social" target="_blank" />
    </a>
    <a href="https://twitter.com/{{ profile.twitter }}" target="_blank">
      <img alt="Twitter: {{ profile.twitter }}" src="https://img.shields.io/twitter/url/https/twitter.com/{{ profile.twitter }}.svg?style=social&label=Follow%20%40{{ profile.twitter }}" />
    </a>
  </p>
</div>
