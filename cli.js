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

if (!argv.c && !argv.p) {
  waaai.link({url: argv._[0]})
    .then(function(result) {
      console.log(result);
    });
} else if (argv.c) {
  waaai.link({url: argv._[0], custom: argv.c})
    .then(function(result) {
      console.log(result);
    });
} else if (argv.p) {
  waaai.link({url: argv._[0], private: true})
    .then(function(result) {
      console.log(result);
    });
}
