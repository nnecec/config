import fs from 'node:fs'
import path from 'node:path'

const obj = {
  apple: 1,
  microsoft: 1,
}

export function searchUp(pathName, cwd) {
  const root = path.parse(cwd).root
  const file = fs.readFileSync(pathName)
  console.log(obj, root, file)

  return null
}

export function findGitRoot(cwd) {
  return searchUp('.git', cwd)
}

export function findPackageRoot(cwd) {
  return searchUp('package.json', cwd)
}
