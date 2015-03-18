![travis](https://travis-ci.org/underr/waaai.svg?branch=master)

## Setup

Use `sudo npm -g install waaai` to install the CLI program

## CLI Usage

`$ waaai https://github.com/underr/waaai/`  ➔  `http://waa.ai/4giF`

**Private link**: `$ waaai -p http://yuruyuri.com/ ` ➔   `http://waa.ai/4gh7/9cf648`

**Custom link**: `$ waaai -c smokeeveryday http://420.moe/` ➔  `http://waa.ai/smokeeveryday`

## API Usage

`npm install waaai`

```
var waaai = require('waaai');
// Using promises:
waaai.link({
  url: 'http://rei-ayanami.com/rei/',
  custom: 'ayanami-rei'
})
.then(function (result) {
  console.log(result) + '\n' // outputs http://waaai/ayanami-rei
});
// Or the hated yet traditional callbacks:
waaai.link({url: 'http://rei-ayanami.com/rei/'}, function(error, result) {
  if (!error) console.log(result)
});
```

### Parameters

* **url**: string (required)
* **custom**: string
* **private**: boolean

## Python version

[Here.](https://gist.github.com/underr/1e0730b38202b63b40e9)
