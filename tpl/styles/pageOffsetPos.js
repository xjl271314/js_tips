/**
 * 获取元素在页面上的offsetLeft
 * @param {htmlElement} el 要获取的html元素 
 */
export function getElementPageOffsetLeft(el){
    let actualLeft = el.offsetLeft;
    let current = el.offsetParent;
    while (current !== null){ 
        actualLeft += current.offsetLeft; 
        current = current.offsetParent; 
    } 
    return actualLeft;
}

/**
 * 获取元素在页面上的offsetTop
 * @param {htmlElement} el 要获取的html元素 
 */
export function getElementPageOffsetTop(el){
    let actualTop = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null){ 
        actualTop += current.offsetTop; 
        current = current.offsetParent; 
    } 
    return actualTop;
}