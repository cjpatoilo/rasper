module.exports = (args = process.argv.slice(1)) => {
	if (!Array.isArray(args)) throw new Error('Rasper should receive an Array')

	const rasper = { _: [] }

	args
		.map((arg, index, self) => {
			const next = self[index + 1]
			const prev = self[index - 1]

			if (arg[0] === '-' && arg.indexOf('=') === -1 && next[0] === '-') {
				return arg + '=' + 'true'
			}
			if (arg[0] === '-' && arg.indexOf('=') === -1 && next[0] !== '-' && next.indexOf('=') === -1) {
				return arg + '=' + next
			}
			if (arg[0] !== '-' && !arg.indexOf('=') !== -1 && String(prev)[0] !== '-') {
				return index + '=' + arg
			}

			return arg // arg[0] === '-' && arg.indexOf('=') !== -1
		})
		.filter(arg => arg.split('=')[1] !== undefined)
		.map(arg => arg.replace(/-/g, ''))
		.map(arg => {
			if (!isNaN(arg.split('=')[0])) rasper._.push(arg.split('=')[1])
			rasper[arg.split('=')[0]] = arg.split('=')[1]
		})

	return rasper
}
