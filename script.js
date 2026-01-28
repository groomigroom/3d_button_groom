const flipbtn = document.querySelector(".flipbtn");

flipbtn.addEventListener("click", () => {
    if (flipbtn.classList.contains("on")) {
        flipbtn.classList.remove("on");   
    } else {
        flipbtn.classList.add("on");    
    }
});
