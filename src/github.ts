export function githubSuccessComment(repoType: string, repoSubType: string, variables: any, packageVariables: any) {
  if (repoType === 'angular') {
    // Re-visit
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :heart_eyes_cat:'
  } else if (
    repoType === 'ansible' &&
    repoSubType === 'role' &&
    variables.galaxy_info &&
    variables.galaxy_info.namespace &&
    variables.galaxy_info.role_name
  ) {
    return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[Ansible Galaxy](https://galaxy.ansible.com/${variables.galaxy_info.namespace}/${variables.galaxy_info.role_name})** :sparkles:\n\n\`\`\`\nansible-galaxy install ${variables.galaxy_info.namespace}.${variables.galaxy_info.role_name}\n\`\`\``
  } else if (
    repoType === 'docker' &&
    ((variables.slug && variables.profile && variables.profile.dockerhub) || variables.dockerHubImage)
  ) {
    const image = variables.dockerHubImage
      ? variables.dockerHubImage
      : `${variables.profile.dockerhub}/${variables.slug}`

    return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[DockerHub](https://hub.docker.com/repository/docker/${image})** :whale:\n\n\`\`\`\ndocker pull ${image}:latest\n\`\`\``
  }
  switch (repoType) {
    case 'go': {
      if (variables.binName) {
        return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :fire:\n\n**Quick Update:**\n\n\`\`\`curl -sS https://install.doctor/${variables.binName} | bash\n\`\`\``
        // Re-visit: Add exeName to .variables.json
      }

      return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :fire:'
    }
    case 'npm': {
      if (packageVariables.bin) {
        return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[npmjs.com](https://www.npmjs.com/package/${packageVariables.name})** :rocket:\n\n**Quick Update:**\n\n\`\`\`npm install -g ${packageVariables.name}@latest\n\`\`\``
      }

      // Re-visit: Add packageName to .variables.json
      return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[npmjs.com](https://www.npmjs.com/package/${packageVariables.name})** :rocket:`
    }
    case 'packer': {
      if (variables.vagrantUpURL) {
        return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[VagrantUp](${variables.vagrantUpURL})** :rocket:`
        // Re-visit: Add vagrantUpURL
      }

      return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:'
    }
    case 'python': {
      return `:tada: This issue has been resolved in version \${nextRelease.version} :tada:\n\nThe release is available on **[PyPi.org](https://pypi.org/project/${
        variables.customPyPiPackageName ? variables.customPyPiPackageName : variables.customPackageName
      }/)** :snake:\n\n**Quick Update:**\n\n\`\`\`pip3 install -U ${
        variables.customPyPiPackageName ? variables.customPyPiPackageName : variables.customPackageName
      }\n\`\`\``
    }
    // No default
  }

  return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :heart_eyes_cat:'
}
