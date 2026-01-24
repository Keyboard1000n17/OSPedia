<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ehmicky/design/main/keep-func-props/keep-func-props_dark.svg"/>
  <img alt="keep-func-props logo" src="https://raw.githubusercontent.com/ehmicky/design/main/keep-func-props/keep-func-props.svg" width="700"/>
</picture>

[![Node](https://img.shields.io/badge/-Node.js-808080?logo=node.js&colorA=404040&logoColor=66cc33)](https://www.npmjs.com/package/keep-func-props)
[![Browsers](https://img.shields.io/badge/-Browsers-808080?logo=firefox&colorA=404040)](https://unpkg.com/keep-func-props?module)
[![TypeScript](https://img.shields.io/badge/-Typed-808080?logo=typescript&colorA=404040&logoColor=0096ff)](/src/main.d.ts)
[![Codecov](https://img.shields.io/badge/-Tested%20100%25-808080?logo=codecov&colorA=404040)](https://codecov.io/gh/ehmicky/keep-func-props)
[![Minified size](https://img.shields.io/bundlephobia/minzip/keep-func-props?label&colorA=404040&colorB=808080&logo=webpack)](https://bundlephobia.com/package/keep-func-props)
[![Mastodon](https://img.shields.io/badge/-Mastodon-808080.svg?logo=mastodon&colorA=404040&logoColor=9590F9)](https://fosstodon.org/@ehmicky)
[![Medium](https://img.shields.io/badge/-Medium-808080.svg?logo=medium&colorA=404040)](https://medium.com/@ehmicky)

Wrap a function without changing its name and other properties.

Function wrappers return a new function which means the original function's
`name` and other properties are usually lost. This module enhances them to keep
those properties instead.

The new function will also print the original function's body when stringified.

Function wrappers are commonly used in functional programming. They take a
function as input and return it wrapped. Examples include
[memoizing](https://github.com/planttheidea/moize) or ensuring a function is
only called once.

# Example

<!-- eslint-disable node/file-extension-in-import -->

```js
import keepFuncProps from 'keep-func-props'
// Any function wrapper works
import memoize from 'lodash/memoize.js'

const betterMemoize = keepFuncProps(memoize)

const anyFunction = () => true

// Function `name` and other properties are kept
console.log(anyFunction) // `[Function: anyFunction]`
console.log(memoize(anyFunction)) // `[Function: memoized]`
console.log(betterMemoize(anyFunction)) // `[Function: anyFunction]`

// Function body is kept when stringified
console.log(String(anyFunction))
// () => true
console.log(String(memoize(anyFunction)))
// function() {
//   var args = arguments,
//   key = resolver ? resolver.apply(this, args) : args[0],
//   cache = memoized.cache;
//   ...
// }
console.log(String(betterMemoize(anyFunction)))
// /* Wrapped with memoized() */
// () => true
```

# Demo

You can try this library:

- either directly [in your browser](https://repl.it/@ehmicky/keep-func-props).
- or by executing the [`examples` files](examples/README.md) in a terminal.

# Install

```bash
npm install keep-func-props
```

This package works in both Node.js >=16.17.0 and
[browsers](https://raw.githubusercontent.com/ehmicky/dev-tasks/main/src/browserslist).

This is an ES module. It must be loaded using
[an `import` or `import()` statement](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c),
not `require()`. If TypeScript is used, it must be configured to
[output ES modules](https://www.typescriptlang.org/docs/handbook/esm-node.html),
not CommonJS.

# Usage

```js
import keepFuncProps from 'keep-func-props'

// Any function wrapper works
const wrapper =
  (anyFunction) =>
  (...args) =>
    anyFunction(...args)

// `betterWrapper` is like `wrapper` but it keeps the function properties
const betterWrapper = keepFuncProps(wrapper)
```

## keepFuncProps(wrapper)

`wrapper`: `(anyFunction, [...args]) => newFunction`\
_Returns_: new `wrapper`

A function `wrapper` is passed as argument. A copy of it is returned.

# See also

- [`mimic-fn`](https://github.com/sindresorhus/mimic-fn): same but for functions
  that do not wrap other functions.

# Support

For any question, _don't hesitate_ to [submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

# Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix a bug or add a new feature, please check our
[guidelines](CONTRIBUTING.md). Pull requests are welcome!

<!-- Thanks go to our wonderful contributors: -->

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<!--
<table><tr><td align="center"><a href="https://fosstodon.org/@ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/ehmicky/keep-func-props/commits?author=ehmicky" title="Code">💻</a> <a href="#design-ehmicky" title="Design">🎨</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/ehmicky/keep-func-props/commits?author=ehmicky" title="Documentation">📖</a></td></tr></table>
-->
<!-- ALL-CONTRIBUTORS-LIST:END -->
