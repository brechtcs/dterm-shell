#!/usr/bin/env node

var Webrun = require('@rangermauve/webrun')
var minimist = require('minimist')

var url = new URL('dat://dterm.hashbase.io/src/shell.js')
var webrun = new Webrun()

// Append CLI flags as URL params
var argv = minimist(process.argv.slice(1))
delete argv._

for (var key in argv) {
  url.searchParams.set(key, argv[key])
}

// Start Dterm
webrun.run({ url })
