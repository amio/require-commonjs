# require-commonjs
Async require commonjs module right within browser.

## Usage:

```javascript
window.requireCommonjs(['path/to/a/common/module.js'], function (thatModule) {
  console.log(thatModule)
})
```
