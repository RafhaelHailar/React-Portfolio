import emailjs from '@emailjs/browser';

//local storage const

const MESSAGES = "RafPFolio-messages";
const SET_EMAIL = "RafPFolio-setEmail";

export const getViewerEmail = () => localStorage.getItem(SET_EMAIL);
export const setViewerEmail = function(email) {
    if (email === "") return false;
    localStorage.setItem(SET_EMAIL,email);
    return true;
}

function getMessages() {
    const messages = localStorage.getItem(MESSAGES) || "[]";
    return JSON.parse(messages);
}


export { getMessages };

export function updateMessage(id,updatedMessage) {
    const messages = getMessages();
    messages[id] = updatedMessage;
    localStorage.setItem(MESSAGES,JSON.stringify(messages));
}

export function getMessage(id) {
    const messages = getMessages();
    return messages[id];
}

export const sendMessage = function(messageForm,updateStatus) {
    try {
        /*emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                         messageForm,
                         process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then(
            (data) => { */
                updateStatus(null,true);
           /* },(error) => {
                updateStatus(error);
        }); */ 
    } catch (error) {
        console.log(error);
    }

}

export const createMessage = function(messageForm,setMessages) {
    let messages = getMessages();
    const newMessage = {
        id: messages.length,
        email: messageForm.email.value,
        message: messageForm.message.value,
        dateCreated: messageForm.dateCreated.value,
        sent: false,
        error: null
    };
    messages.push(newMessage);
    setMessages(messages);
    localStorage.setItem(MESSAGES,JSON.stringify(messages));
}
