import * as fs from 'node:fs'
import { execSync } from 'node:child_process'
import * as YAML from 'yaml'

export const acquireProjectType = (): {
  readonly vars: { readonly REPOSITORY_SUBTYPE: string; readonly REPOSITORY_TYPE: string }
} => {
  if (fs.existsSync('./Taskfile.yml')) {
    return YAML.parse(fs.readFileSync('./Taskfile.yml', 'utf8'))
  }

  return {
    vars: {
      REPOSITORY_SUBTYPE: 'generic',
      REPOSITORY_TYPE: 'generic'
    }
  }
}

export const acquireVariables = (): any => {
  if (fs.existsSync('./.variables.json')) {
    return JSON.parse(fs.readFileSync('./.variables.json'))
  } else {
    process.exit(1)
  }
}

export const acquirePackage = (): any => {
  if (fs.existsSync('./package.json')) {
    return JSON.parse(fs.readFileSync('package.json'))
  } else {
    process.exit(1)
  }
}
