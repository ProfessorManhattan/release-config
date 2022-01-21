
export function githubSuccessComment(repoType: string, repoSubType: string, variables: any, packageVars: any) {
  if (repoType === 'angular') {
    // Re-visit
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :heart_eyes_cat:'
  } else if (repoType === 'ansible' && repoSubType === 'role' && variables.galaxy_info && variables.galaxy_info.namespace && variables.galaxy_info.role_name) {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[Ansible Galaxy](https://galaxy.ansible.com/' + variables.galaxy_info.namespace + '/' + variables.galaxy_info.role_name + ')** :sparkles:\n\n```\nansible-galaxy install ' + variables.galaxy_info.namespace + '.' + variables.galaxy_info.role_name + '\n```'
  } else if (repoType === 'docker' && ((variables.slug && variables.profile && variables.profile.dockerhub) || (variables.dockerHubImage)) {
    const image = variables.dockerHubImage ? variables.dockerHubImage : (variables.profile.dockerhub + '/' + variables.slug)
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[DockerHub](https://hub.docker.com/repository/docker/' + image + ')** :whale:\n\n```\ndocker pull ' + image + ':latest\n```'
  } else if (repoType === 'go') {
    if (variables.exeName) {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :fire:\n\n**Quick Update:**\n\n```curl -sS https://install.doctor/' + variables.exeName + ' | bash\n```'
    // Re-visit: Add exeName to .variables.json
    } else {
      return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :fire:'
    }
  } else if (repoType === 'npm') {
    if (packageVars.bin) {
      return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[npmjs.com](https://www.npmjs.com/package/' + variables.packageName + ')** :rocket:\n\n**Quick Update:**\n\n```npm install -g ' + variables.packageName + '@latest\n```'
    } else {
      // Re-visit: Add packageName to .variables.json
      return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[npmjs.com](https://www.npmjs.com/package/' + variables.packageName + ')** :rocket:'
    }
  } else if (repoType === 'packer') {
    if (variables.vagrantUp) {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[VagrantUp](' + variables.vagrantUpURL + ')** :rocket:'
    // Re-visit: Add vagrantUpURL
  } else {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:'
  }
  } else if (repoType === 'python') {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on **[PyPi.org](https://pypi.org/project/' + variables.packageNamePyPi + '/)** :snake:\n\n**Quick Update:**\n\n```pip3 install -U ' + variables.packageNamePyPi + '\n```'
    // Re-visit: Add exeName to .variables.json
  } else {
    return ':tada: This issue has been resolved in version ${nextRelease.version} :tada:\n\nThe release is available on the **[GitHub release](<github_release_url>)** page :heart_eyes_cat:'
  }
}
