import fs from 'fs'
import path from 'path'

export function searchUp(pathName, cwd) {
  const root = path.parse(cwd).root
  const file = fs.readFileSync(pathName)
  console.log(root, file)

  return null
}

export function findGitRoot(cwd) {
  return searchUp('.git', cwd)
}

export function findPackageRoot(cwd) {
  return searchUp('package.json', cwd)
}
