#!/usr/bin/env node
var waaai = require('./waaai');
var argv = require('yargs')
  .usage('Usage: $0 <url> [options]')
  .describe('c', 'Create a custom link.')
  .describe('p', 'Create a private link.')
  .describe('i', 'Get info from short code')
  .example('$0 https://github.com/underr/waaai/', 'Create http://waa.ai/4giF')
  .example('$0 -p http://yuruyuri.com/', 'Create: http://waa.ai/4gh7/9cf648')
  .example('$0 -c smokeeveryday http://420.moe/', 'Create: http://waa.ai/smokeeveryday')
  .example('$0 -i 4iLm', 'Gives back link info')
  .alias('h', 'help')
  .alias('c', 'custom')
  .alias('p', 'private')
  .alias('i', 'info')
  .help('h')
  .epilog('http://waaa.ai · https://github.com/underr/waaai')
  .argv;

var validURL = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

if (argv.i) {
  waaai.info(argv.i)
    .then(function(result) {
      r = result;
      code = r.short_code;
      clicks = result.clicks.toString();
      created = r.date_created;
      long = r.long_url;
      last = r.last_visited ?  r.last_visited : 'Never';
      console.log('Short URL: http://waa.ai/' + code + '\nFull URL: ' + long + '\nClicks: ' +
                  clicks + '\nLast visited: ' + last + '\nDate created: ' + created);
    });
} else {
  link = argv._[0];

  if (!link) {
    console.log('You must give a URL. Use --help for usage.');
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
}
