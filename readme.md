<a align="center" href="https://cjpatoilo.com/rasper"><img width="100%" src="https://cjpatoilo.com/rasper/assets/icons/thumbnail.png" alt="Rasper - Light-weight parse argument options."></a>

> Light-weight parse argument options.

[![Travis Status](https://travis-ci.org/cjpatoilo/rasper.svg?branch=master)](https://travis-ci.org/cjpatoilo/rasper?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/tpjjmha9bs60ndq8?svg=true)](https://ci.appveyor.com/project/cjpatoilo/rasper)
[![Codacy Status](https://img.shields.io/codacy/grade/99f45f0e32c649e79db8ba48c66b468f/master.svg)](https://www.codacy.com/app/cjpatoilo/rasper/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/rasper.svg)](https://david-dm.org/cjpatoilo/rasper)
[![Version Status](https://badge.fury.io/js/rasper.svg)](https://www.npmjs.com/package/rasper)
[![Download Status](https://img.shields.io/npm/dt/rasper.svg)](https://www.npmjs.com/package/rasper)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/rasper)


## Why it's awesome

Lorem ipsum


## Getting Started

**Install with npm**

```
$ npm install rasper
```

**Install with Yarn**

```
$ yarn add rasper
```


## Usage

```
// cli.js
var arguments = require('rasper')(process.argv.slice(2))
console.dir(arguments)

// console
$ pwa-installer dist/**/*.html -f 3 -n -o 4 foo bar baz --manifest --config=pwa.config.js 2 4 -f=99
{
	_: [ 'dist/**/*.html', 'foo', 'bar', 'baz', 2, 4 ],
	n: true,
	o: 4,
	manifest: true,
	config: 'pwa.config.js',
	f: 99
}
```

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/rasper/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
