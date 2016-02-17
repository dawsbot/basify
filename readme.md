# basify [![Build Status](https://travis-ci.org/dawsonbotsford/basify.svg?branch=master)](https://travis-ci.org/dawsonbotsford/basify) [![npm](https://img.shields.io/npm/v/basify.svg)](https://www.npmjs.com/package/basify)

> Get the base name of a file

<br>

## Install

```
npm install --save basify
```


<br>

## Usage

```js
const basify = require('basify');

basify('index.js');
//=> 'index'

basify(['index1.js', 'index2.html']);
//=> ['index1', 'index2']
```


<br>

## API

### basify(target)

##### target

Type: `string` || `Array`

Removes the filetype extension and returns the base.

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
