# require-commonjs

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/require-commonjs.svg)](https://greenkeeper.io/)
Async require commonjs module right within browser.

## Usage:

include script from html:
```
<script src="https://npmcdn.com/require-commonjs/require-commonjs.js"></script>
```

then:

```javascript
window.requireCommonjs(['path/to/a/common/module.js'], function (thatModule) {
  console.log(thatModule)
})
```
