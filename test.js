const test = require('ava')
const pkg = require('./package.json')
const pkgLock = require('./package-lock.json')
const rasper = require('./')

test('main feature', t => {
	const argv = rasper(
		'pwa-installer dist/**/*.html -f 3 -n -o 4 foo bar baz --manifest --config=pwa.config.js 2 4 -f=99 -l apache-2.0 --no-readme'
			.split(' ')
			.slice(1)
	)
	const expect = {
		_: [ 'dist/**/*.html', 'foo', 'bar', 'baz', 2, 4 ],
		n: true,
		o: 4,
		manifest: true,
		config: 'pwa.config.js',
		f: 99,
		l: 'apache-2.0',
		noReadme: true
	}

	t.deepEqual(argv, expect)
})

test('version', t => {
	t.is(pkg.version, pkgLock.version)
})
