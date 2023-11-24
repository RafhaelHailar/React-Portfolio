import emailjs from '@emailjs/browser';

export const getViewerEmail = () => localStorage.getItem("RafPFolio-setEmail");
export const setViewerEmail = function(email) {
    if (email === "") return false;
    localStorage.setItem("RafPFolio-setEmail",email);
    return true;
}

function getMessages() {
    const messages = localStorage.getItem("RafPFolio-messages") || "[]";
    return JSON.parse(messages);
}

export { getMessages };

export const sendMessage = function(messageForm,setMessages) {
    let messages = getMessages();
    const newMessage = {
        email: messageForm.email.value,
        message: messageForm.message.value,
        dateCreated: messageForm.dateCreated.value
    };
    const data = new FormData(messageForm);
    try {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                         messageForm,
                         process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        .then(
            (data) => {
                newMessage.sent = true;
            },(error) => {
                console.error(error);
                newMessage.sent = false;
            })  
        .finally(() => {
            messages.push(newMessage);
            setMessages(messages);
            localStorage.setItem("RafPFolio-messages",JSON.stringify(messages));
        });
    } catch (error) {
        console.log(error);
    }
}
