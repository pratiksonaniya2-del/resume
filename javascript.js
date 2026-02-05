
const togglebtn = document.getElementById("modeToggle");
let currmode = "light";
togglebtn.addEventListener("click" , () => {
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "#0b0f1a";
        togglebtn.textContent = "🌙";
    } else {
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "#1a0b0b";
        togglebtn.textContent = "☀️";
    }
})
let project = document.querySelector(".project-card");
project.addEventListener("click" , () => {
    window.location.href = "https://manitnotehub.free.nf/";
})
