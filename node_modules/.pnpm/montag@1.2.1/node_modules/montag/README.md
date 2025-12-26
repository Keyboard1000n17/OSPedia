# Montag [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage][CoverageIMGURL]][CoverageURL]

> “If you don’t want a house built, hide the nails and wood.
> If you don’t want a man unhappy politically, don’t give him two sides to a question to worry him; give him one. Better yet, give him none.”

Format multiline strings using [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates), instead of puting all lines into an array and joining to a string.

## Install

```
npm i montag
```

## How to use?

```js
const montag = require('montag');

const str1 = montag`
    if (a > b)
        console.log(c);
`;

const str2 = [
    'if (a > b)',
    '    console.log(c)',
].join('\n');

str1 === str2;
// returns
true;
```

## License

MIT

[NPMIMGURL]: https://img.shields.io/npm/v/montag.svg?style=flat&longCache=true
[BuildStatusIMGURL]: https://img.shields.io/travis/coderaiser/montag/master.svg?style=flat&longCache=true
[DependencyStatusIMGURL]: https://img.shields.io/david/coderaiser/montag.svg?style=flat&longCache=true
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat&longCache=true
[NPMURL]: https://npmjs.org/package/montag "npm"
[BuildStatusURL]: https://travis-ci.org/coderaiser/montag "Build Status"
[DependencyStatusURL]: https://david-dm.org/coderaiser/montag "Dependency Status"
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[CoverageURL]: https://coveralls.io/github/coderaiser/montag?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/montag/badge.svg?branch=master&service=github
