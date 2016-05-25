![cargo trains](https://pixabay.com/static/uploads/photo/2014/05/03/17/22/goods-station-337142_960_720.jpg)
cargo
==============

[![Build Status](https://travis-ci.org/dasilvacontin/cargo.svg?branch=master)](https://travis-ci.org/dasilvacontin/cargo)
[![Coverage Status](https://coveralls.io/repos/github/dasilvacontin/cargo/badge.svg?branch=master)](https://coveralls.io/github/dasilvacontin/cargo?branch=master)

Deliver args to your npm scripts.

## Install

```
npm i -D @dasilvacontin/cargo
```

## Usage

```
➜  cat package.json
{
  "name": "cargo-test",
  "version": "1.0.0",
  "scripts": {
    "bump": "cargo \"npm version $1 -m ':ship: Release v%s'\""
  },
  ...
  "devDependencies": {
    "@dasilvacontin/cargo": "^1.0.0"
  }
}

➜  npm run bump -- patch

> cargo-test@1.0.0 bump /Users/dasilvacontin/GitHub/dasilvacontin/cargo-test
> cargo 'npm version $1 -m ":ship: Release v%s"' "patch"
> npm version patch -m ":ship: Release v%s"

v1.0.1

➜  cat package.json | grep version
  "version": "1.0.1",
    "bump": "cargo 'npm version $1 -m \":ship: Release v%s\"'"

➜  git log --pretty=oneline | grep ship
    1a0dae551eb3a585007ca7b29960b85a90fbbaf0 :ship: Release v1.0.1
```

## License

MIT © [David da Silva]

[David da Silva]: https://dasilvacont.in
