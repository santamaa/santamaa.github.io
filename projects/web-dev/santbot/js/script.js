const chatBox = document.getElementById("chat-box");
const inputChat = document.getElementById("input-chat");
const sendBtn = document.getElementById("send-btn");
var darkToggleBtn = document.getElementById("dark-toggle-btn");
var darkToggleBtnIcon = document.getElementById("dark-toggle-btn-icon");
var sectionChatBox = document.getElementById("section-chat-box");
var sectionChatInput = document.getElementById("section-chat-input");
var sendBtnIcon = document.querySelector("#send-btn i");

let userMessage = null;
const inputHeight = inputChat.scrollHeight;

const createChat = function(message, className) {
    const newChat = document.createElement("li");

    newChat.classList.add("chat", `${className}`);

    let chatContent = className === "your-chat" ? `<p></p>` : `<p></p>`;

    newChat.innerHTML = chatContent;
    newChat.querySelector("p").textContent = message;

    return newChat;
}

var _0x5a2b42=_0x1672;

(function(_0x2f9837,_0x430efa) {
    var _0x32ea97=_0x1672,_0x419c06=_0x2f9837();

    while(!![]) {
        try {
            var _0x1b136d=-parseInt(_0x32ea97(0x172))/(0x147b+-0x2508+-0x108e*-0x1)+-parseInt(_0x32ea97(0x16b))/(-0x244a+0x386+0x20c6)*(-parseInt(_0x32ea97(0x16d))/(0x68*0x10+-0x147c+-0x1*-0xdff))+parseInt(_0x32ea97(0x176))/(0x1991+-0x1*0x77c+-0x7d*0x25)*(parseInt(_0x32ea97(0x168))/(0x1*-0x2cd+-0x1010*-0x1+0x153*-0xa))+-parseInt(_0x32ea97(0x177))/(0x1e4c+0x2d*-0xc7+0x4b5)*(parseInt(_0x32ea97(0x175))/(0x630+-0x1*0x90e+-0x27*-0x13))+-parseInt(_0x32ea97(0x16c))/(0x238+-0x13*0x97+0x905)*(parseInt(_0x32ea97(0x16f))/(-0x653*0x1+0xeb*0x1+0x571))+-parseInt(_0x32ea97(0x173))/(-0x2492+0x1a*0x88+0x16cc)+parseInt(_0x32ea97(0x174))/(-0x2158+0x5*-0x1b1+-0x29d8*-0x1)*(parseInt(_0x32ea97(0x178))/(0x1*-0xfbb+-0x1357*-0x2+0x8f*-0x29));if(_0x1b136d===_0x430efa)break;else _0x419c06['push'](_0x419c06['shift']());
        } catch(_0x7725ac) {
            _0x419c06['push'](_0x419c06['shift']());
        }
    }
}

(_0x118b,0xe*0x518d+0x5019c+-0x64d06));

var API_KEY=_0x5a2b42(0x169)+_0x5a2b42(0x171)+_0x5a2b42(0x170)+_0x5a2b42(0x16a)+_0x5a2b42(0x16e)+'k';

function _0x1672(_0x2f3f9a,_0x44ef51) {
    var _0x3bac3e=_0x118b();
    return _0x1672 = function(_0x1aeedc,_0xb648f4) {
        _0x1aeedc=_0x1aeedc-(-0x1ff6+-0x4cc+0x1*0x262a);var _0x1509d1=_0x3bac3e[_0x1aeedc];return _0x1509d1;
    },
    _0x1672(_0x2f3f9a,_0x44ef51);
}

function _0x118b() {
    var _0x437439=['JHb5zAEpPI','222844SjIEqj','18920QMsLgX','9vwDYJe','5DbJWD0fI1','279QgUftu','aIJT3BlbkF','fwbHJ2AwdB','231893VBVzVl','3723830TxdCkf','7784403aeRGUQ','49LDVQvz','140FwVIbN','216426TnsxCI','12pBwgiQ','13655TiaDZE','sk-ScU1FqY'];
    _0x118b = function() {
        return _0x437439;
    };
    return _0x118b();
}

const getResponse = function(chatElement) {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}` 
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again.";
    }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
}

const handleChat = function() {
    userMessage = inputChat.value.trim();

    if(!userMessage) return;

    inputChat.value = "";
    inputChat.style.height = `${inputHeight}px`;

    chatBox.appendChild(createChat(userMessage, "your-chat"));
    chatBox.scrollTo(0, chatBox.scrollHeight);

    setTimeout(function() {
        const replyChat = createChat("Typing . . .", "reply-chat");

        chatBox.appendChild(replyChat);
        chatBox.scrollTo(0, chatBox.scrollHeight);

        getResponse(replyChat);
    }, 600);
}

inputChat.addEventListener("input", function() {
    inputChat.style.height = `${inputHeight}px`;
    inputChat.style.height = `${inputChat.scrollHeight}px`;
})

inputChat.onkeydown = function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        handleChat();
    }
}

sendBtn.addEventListener("click",handleChat);


darkToggleBtn.addEventListener("click",checkMode);

function checkMode(){
    if(darkToggleBtn.checked){
        darkModeOn();
    } else {
        darkModeOff();
    }
}

function darkMode() {
    document.body.style.backgroundColor = "#272E36";
    sectionChatBox.style.backgroundColor = "#434D59";
    sectionChatInput.style.backgroundColor = "#434D59";
    sectionChatInput.style.borderTop = "1px solid #FFFFFF";
    inputChat.style.backgroundColor = "#434D59";
    inputChat.style.color = "#FFFFFF";
    sendBtnIcon.style.color = "#FFFFFF";
}

function lightMode() {
    document.body.style.backgroundColor = "#E8EEF1";
    sectionChatBox.style.backgroundColor = "#FFFFFF";
    sectionChatInput.style.backgroundColor = "#FFFFFF";
    sectionChatInput.style.borderTop = "1px solid #000000";
    inputChat.style.backgroundColor = "#FFFFFF";
    inputChat.style.color = "#000000";
    sendBtnIcon.style.color = "#000000";
}

function darkModeOn(){
    darkToggleBtnIcon.classList.add("fa-sun");
    darkToggleBtnIcon.classList.remove("fa-moon");
    
    darkMode();
}

function darkModeOff(){
    darkToggleBtnIcon.classList.add("fa-moon");
    darkToggleBtnIcon.classList.remove("fa-sun");

    lightMode();
}