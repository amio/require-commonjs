# require-commonjs
Async require commonjs module right within browser.

## Usage:

include script from html: 
```
<script src="https://npmcdn.com/require-commonjs@1.0.1/require-commonjs.js"></script>
```

then:
```javascript
window.requireCommonjs(['path/to/a/common/module.js'], function (thatModule) {
  console.log(thatModule)
})
```
