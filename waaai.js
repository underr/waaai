#!/usr/bin/env node
var program = require('commander');
var request = require('request');

var validURl = /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;

program
.version('0.0.3')
.command('*')
.description('Creates a short link for given URL on waa.ai')

.action(function(env) {
    if (env.match(validURl)) {
        request('http://api.waa.ai/shorten?url=' + env, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                var akari = JSON.parse(body);
                var e = akari.data.url
                console.log(e);
            } else { 
                console.log('Error when requesting URL');
            }
        })
    } else {
        console.log('Not a valid url')
    }
});

program.parse(process.argv);
if (!program.args.length) program.help();
