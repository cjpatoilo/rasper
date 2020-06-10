module.exports = (args = process.argv.slice(1)) => {
  if (!Array.isArray(args)) throw new Error('Rasper should receive an Array')

  const rasper = { _: [] }

  args
    .map(getValue)
    .map(removeDashs)
    .filter(removeUndefined)
    .map(setValue)

  return rasper

  function hasDash (value) {
    return String(value)[0] === '-'
  }

  function hasEqual (value) {
    return String(value).indexOf('=') !== -1
  }

  function getValue (value, index, self) {
    const next = self[index + 1]
    const prev = self[index - 1]

    if (!hasDash(value)) {
      if (!hasDash(prev) || (hasDash(prev) && hasEqual(prev))) {
        rasper._.push(parser(value))
      }
      if (hasDash(prev) && !hasEqual(prev)) {
        return prev + '=' + value
      }
    }
    if (hasDash(value) && !hasEqual(value)) {
      if (hasDash(next) || !next) {
        return value + '=' + 'true'
      }
      if (!hasDash(next) && hasEqual(next)) {
        return value + '=' + next
      }
    }

    return value
  }

  function removeDashs (value) {
    return value.match(/[^-].*/)[0]
  }

  function removeUndefined (value) {
    return value.split('=')[1] !== undefined
  }

  function kebabToCamel (value) {
    return value.replace(/-([a-z])/g, (_, k) => k.toUpperCase())
  }

  function setValue (value) {
    const key = parser(kebabToCamel(value.split('=')[0]))
    const val = parser(value.split('=')[1])

    rasper[key] = val
  }

  function parser (value) {
    if (value === 'true') {
      return true
    }
    if (value === 'false') {
      return false
    }
    if (!isNaN(value)) {
      return Number(value)
    }

    return value
  }
}
