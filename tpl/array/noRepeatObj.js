const arr = [
    { id: 1, value: 111 },
    { id: 2, value: 222 },
    { id: 3, value: 333 },
    { id: 1, value: 111 }
];

// 方法1：利用对象访问属性的方法，判断对象中是否存在key
function singleObjArr(arr, key = 'id') {
    const result = [];
    const obj = {};
    for (let item of arr) {
        if (!obj[item[`${key}`]]) {
            result.push(item)
            obj[item[`${key}`]] = true
        }
    }
    return result
}

// 方法2：利用`reduce`方法遍历数组,`reduce`第一个参数是遍历需要执行的函数，第二个参数是item的初始值
function singleObjArr(arr, key = 'id') {
    const obj = {}
    arr = arr.reduce(function (item, next) {
        obj[next[`${key}`]] ? '' : obj[next[`${key}`]] = true && item.push(next);
        return item;
    }, [])

    return arr
}