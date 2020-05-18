# 工具函数

## 延迟函数(异步调用函数)

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'
```

## 角度转弧度

```js
const degreesToRads = deg => (deg * Math.PI) / 180.0;

degreesToRads(90.0); // ~1.5708
```

## 计算两个点之间的距离

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

distance(1, 1, 2, 3); // 2.23606797749979
```

## 根据指定条件查找出满足条件对象的键值

```js
const findKey = (obj, fn) => Object.keys(obj).filter(key => fn(obj[key], key, obj));

const obj =   {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
};

findKey(obj, o => o['active']); 
// ["barney", "pebbles"]
```

