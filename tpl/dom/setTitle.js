/**
 * 设置文档显示标题
 * @param {string} title 文档标题
 * @param {function} callBack 回调函数
 */
export function setDocumentTitle(title, callBack=()=>{}){
    document.title = title
    if(typeof callBack === 'function'){
        callBack()
    }
}