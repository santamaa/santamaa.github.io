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

const getResponse = function(chatElement) {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const API_KEY = `${SANTBOT_API_KEY}`;
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