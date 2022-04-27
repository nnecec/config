import path from 'path'

export function searchUp(pathName, cwd) {
  const root = path.parse(cwd).root

  const found = false

  console.log(root)

  return null
}

export function findGitRoot(cwd) {
  return searchUp('.git', cwd)
}

export function findPackageRoot(cwd) {
  return searchUp('package.json', cwd)
}

export function isChildOf(child, parent) {
  const relativePath = path.relative(child, parent)
  return /^[.\/\\]+$/.test(relativePath)
}
