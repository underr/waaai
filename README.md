![travis](https://travis-ci.org/underr/waaai.svg?branch=master)

## Setup

Use `sudo npm -g install waaai` to install the CLI program

## CLI Usage

`$ waaai https://github.com/underr/waaai/`  ➔  `http://waa.ai/4giF`

**Private link**: `$ waaai http://yuruyuri.com/ -p  ` ➔   `http://waa.ai/4gh7/9cf648`

**Custom link**: `$ waaai http://420.moe/ -c smokeeveryday  ` ➔  `http://waa.ai/smokeeveryday`

**Info from short code**: `$ waaai -i 4giF`

## API Usage

`npm install waaai`

```
var waaai = require('waaai');
// Using promises:
waaai.link({
  url: 'http://rei-ayanami.com/rei/',
  custom: 'ayanami-rei'
})
.then(function(result) {
  console.log(result) + '\n' // outputs http://waa.ai/ayanami-rei
});

// Or the hated yet traditional callbacks:
waaai.link({url: 'http://rei-ayanami.com/rei/'}, function(error, result) {
  if (!error) console.log(result)
});

// Get info from a short code
waaai.info('4iLm')
.then(function (result) {
  console.log(result)
});
```

### Parameters for waaai.link

* **url**: string (required)
* **custom**: string
* **private**: boolean

## Python version

[Here.](https://gist.github.com/underr/1e0730b38202b63b40e9)
