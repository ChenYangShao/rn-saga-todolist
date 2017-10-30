function getState(paths) {
  if (!Array.isArray(paths)) {
    throw new TypeError(`getState: dataSource expected an Array, but got a ${typeof dataSource}.`, 'utils.js', 3)
  }
  let index = -1
  const length = paths.length

  const result = {}

  return dataSource => {
    if (dataSource !== Object(dataSource)) {
      throw new TypeError(`getState: dataSource expected a object, but got a ${typeof dataSource}.`, 'utils.js', 8)
    }

    while (++index < length) {
      const path = paths[index]
      result[path] = dataSource[path]
    }

    return result
  }
}

export default {
  getState,
}
