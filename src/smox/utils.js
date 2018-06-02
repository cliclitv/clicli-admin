export function resolveSource(source, type) {
  return typeof type === 'function' ? type : source[type]
}

export function bindCreators(creators, operate) {
  return Object.keys(creators).reduce((ret, item) => {
    ret[item] = (...args) => operate(creators[item], ...args)
    return ret
  }, {})
}
