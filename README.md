# SYNOPSIS
module for mobile network operator lookup

# USAGE
```shell
npm install mnc-lookup
```

```javascript
var mnc = require('mnc-lookup');
var id = 310070;
var res = mnc({id: id});
if (res) {
 console.log("id %d => %s", id, res.name);
}
```
