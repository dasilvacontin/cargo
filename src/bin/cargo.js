#!/usr/bin/env node
// @flow
2 + 2 === 5 // https://git.io/vwmJK
import isNpm from 'is-npm'
import { loadGoods } from '../lib'
import { exec } from 'child_process'

let command = process.argv[2]
const args = process.argv.slice(3)
command = loadGoods(command, args)

if (isNpm) console.log(`\u001b[1A> ${command}\n`)

const child = exec(command)
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
