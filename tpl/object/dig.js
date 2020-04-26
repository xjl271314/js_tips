export const dig = (obj, target) =>
    target in obj ? obj[target] : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
    }, undefined);

// examples
const data = {
    level1: {
        level2: {
            level3: 'data'
        }
    }
};

dig(data, 'level3'); // 'data'
dig(data, 'level4'); // undefined