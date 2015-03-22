#!/usr/bin/env node
var waaai = require('./waaai');
var argv = require('yargs')
  .usage('Usage: $0 <url> [options]')
  .example('$0 https://github.com/underr/waaai/', 'Creates http://waa.ai/4giF')
  .example('$0 -p http://yuruyuri.com/', 'Creates: http://waa.ai/4gh7/9cf648')
  .example('$0 -c smokeeveryday http://420.moe/', 'Creates: http://waa.ai/smokeeveryday')
  .alias('h', 'help')
  .alias('c', 'custom')
  .alias('p', 'private')
  .help('h')
  .epilog('http://waaa.ai · https://github.com/underr/waaai')
  .argv;

var validURL = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
var link = argv._[0]

if (!link) {
  console.log('You must give a URL.');
  process.exit(1);
} else if (!link.match(validURL)) {
  console.log('Not a valid URL.')
  process.exit(1);
}

if (!argv.c && !argv.p) {
  waaai.link({url: link})
    .then(function(result) {
      console.log(result);
    });
} else if (argv.c) {
  waaai.link({url: link, custom: argv.c})
    .then(function(result) {
      console.log(result);
    });
} else if (argv.p) {
  waaai.link({url: link, private: true})
    .then(function(result) {
      console.log(result);
    });
}

// TODO: sqlite
