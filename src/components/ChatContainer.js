import emailjs from '@emailjs/browser';

export const viewerEmail = localStorage.getItem("RafPFolio-setEmail");
export const setViewerEmail = function(email) {
    localStorage.setItem("RafPFolio-setEmail",email);
    return true;
}
console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
export const sendMessage = function(message) {
    
}
