'use strict';
const subjectInput = document.getElementById('subject');
const bodyInput = document.getElementById('body');
const sendButton = document.getElementById('send');
const memoDivided = document.getElementById('memo-area');

var memoNumber = 0;

sendButton.onclick = () => {
    const subName = subjectInput.value;
    const text = bodyInput.value;

    const inputText = [subName,text];
    const displayText = textCheck(inputText);

    //メモ表示エリアの作成
    const divided = document.createElement('div');
    divided.setAttribute('class', 'memobox');

    const header = document.createElement('h3');
    header.innerText = displayText[0];
    divided.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.innerText = displayText[1];
    divided.appendChild(paragraph);

    memoDivided.appendChild(divided);
}
/**
 * 入力内容をチェックし、無記名の場合は追記
 * @param {string} textArray 件名, 内容
 * @return {string} 
 */
function textCheck(textArray){
    if(!textArray[0]){
        textArray[0] = '件名なし';
    }
    if(!textArray[1]){
        textArray[1] = '内容なし';
    }
    return textArray;
}