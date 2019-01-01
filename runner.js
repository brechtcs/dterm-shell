#!/usr/bin/env node

var cp = require('child_process')
var path = require('path')

var nodeLocation = process.argv0
var loaderLocation = path.join(__dirname, 'bin.js')

var finalArgs = [
  '--experimental-repl-await',
  '--experimental-vm-modules',
  '--no-warnings',
  loaderLocation,
  process.argv.slice(2)
]

cp.spawn(nodeLocation, finalArgs, {
  cwd: process.cwd(),
  stdio: ['inherit', 'inherit', 'inherit']
})
