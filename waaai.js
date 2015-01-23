#!/usr/bin/env node
var program = require('commander');
var request = require('request');

var validURl = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
var lb = "\n";

program
  .version('0.2.5')
  .option('-p, --private', 'Create a private link (e.g waa.ai/4gD4/ce42fd.jpg)')
  .option('-c, --custom <custom URL>', 'Create a custom link (must be between 5 and 30 characters long)', program.custom);

program
  .command('*')
  .description('Create a short link for given URL on waa.ai')
  .action(function(env, options) {
    if (program.private) {
      key = '&private=true';
    } else if (program.custom) {
      key = '&custom=' + program.custom;
    } else {
      key = '';
    }
    if (env.match(validURl)) {
      request('http://api.waa.ai/shorten?url=' + env + key, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var akari = JSON.parse(body).data.url;
          console.log(lb + akari + lb);
        } else {
          if (program.custom) {
            console.log('There was a error when requesting URL: custom URL already exists or it is too long/short.');
          } else {
            console.log('Error when requesting URL');
          }
        }
      });
    } else {
      console.log('Not a valid url');
    }
  });

program.parse(process.argv);
if (!program.args.length) program.help();
