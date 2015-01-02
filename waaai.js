#!/usr/bin/env node
var program = require('commander');
var request = require('request');
var open = require("open");

var validURl = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

program
    .version('0.0.6')
    .description('link shortener for waa.ai')
    .option('-p, --private', 'Create a private link (e.g waa.ai/4gD4/ce42fd.jpg)')
    .option('-o, --open', 'Open the shortened link on your default browser')

program
    .command('*')
    .description('Creates a short link for given URL on waa.ai')
    .usage('[options] <url>')
    .action(function(env, options) {
        if (program.private) {
            key = '&private=true'
        } else {
            key = ''
        }
        if (env.match(validURl)) {
            request('http://api.waa.ai/shorten?url=' + env + key, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var kyoko = JSON.parse(body);
                    var akari = kyoko.data.url
                    console.log(akari);
                    if (program.open) open(akari);                    
                } else { 
                    console.log('Error when requesting URL');
                }
            });
        } else {
            console.log('Not a valid url')
        }
    });

program.parse(process.argv)
if (!program.args.length) program.help();
