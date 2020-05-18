# 日期 Date

## 时间戳转换为时间

- 默认为当前时间转换结果

- isMs为时间戳是否为毫秒

<<< ./tpl/date/timestampToTime.js

## 从Date对象里获取当前时间

```js
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```

## 返回两个日期之间相差多少天

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (new Date(dateFinal) - new Date(dateInitial)) / (1000 * 3600 * 24);
  
getDaysDiffBetweenDates('2019-01-13','2019-01-15'); // 2
```