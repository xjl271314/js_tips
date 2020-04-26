# 字符串String

## 生成随机的id


```js
// 接收一个长度
const RandomId = len => Math.random().toString(36).substr(3, len);

// eg
RandomId(10);
```

## 生成随机颜色值

```js
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor();

```

## 操作URL查询参数

```js
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"

```