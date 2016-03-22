# require-commonjs
Async require commonjs module right within browser.

## Usage:

Include script:

```html
<script src="https://amio.github.io/require-commonjs/require-commonjs.js"></script>
```

then:

```javascript
window.requireCommonjs(['path/to/a/common/module.js'], function (thatModule) {
  console.log(thatModule)
})
```
