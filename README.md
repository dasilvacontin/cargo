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

## What / Why

Scripts defined in your `package.json` can be run via `npm run <script-name>`. [Some special scripts](https://docs.npmjs.com/misc/scripts) (`test`, `start`, `stop` and `restart`) can be executed via `npm <script-name>`.

```bash
➜  cat package.json
{
  ...
  "scripts": {
    "test": "mocha test/**/*.js --require test/fixture.js --reporter dot"
  }
  ...
}

➜  npm test

> temp@1.0.0 test /Users/dasilvacontin/temp
> mocha test/**/*.js --require test/fixture.js --reporter dot

  ․․

  2 passing (9ms)

```

If you want to temporarily execute the same command with an additional argument, `npm` lets you pass arguments to the command the following way:

```bash
➜  npm test -- --grep top

> temp@1.0.0 test /Users/dasilvacontin/temp
> mocha test/**/*.js --require test/fixture.js --reporter dot "--grep" "top"

  ․

  1 passing (4ms)
```

However, this solution only lets you append arguments to the right end of the command.

You could use environment variables, but it's less natural to write, you have to remember the variable name, and you have to make sure it's not already in use by one of the programs in your command:

```bash
➜  cat package.json
{
  ...
  "scripts": {
    "bump": "npm version $INC -m ':ship: Release v%s'"
  }
  ...
}
➜  INC=patch npm run bump

> temp@1.0.0 test /Users/dasilvacontin/temp
> npm version $INC -m ':ship: Release v%s'

v1.0.1
```

## tl;dr

[cargo](https://github.com/dasilvacontin/cargo) lets you add arguments in between, which is useful if they follow a strict order, or if you have `&&` or `|` in your command.

```bash
➜  cat package.json
{
  "name": "cargo-test",
  "version": "1.0.0",
  "scripts": {
    "bump": "cargo 'npm version $1 -m \":ship: Release v%s\"'"
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
