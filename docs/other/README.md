# 其他零散

## try-catch 封装

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (elements instanceof Error) elements = []; // elements = []
```