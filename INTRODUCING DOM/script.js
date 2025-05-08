document.title= "My Webiste"

document.body.style.backgroundColor= "pink"

const username = "Jenny Rabaria!";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;


console.dir("document")