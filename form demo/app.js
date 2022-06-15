const form = document.querySelector(".form");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const errordisplay = document.querySelector(".error");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

form.addEventListener('submit', function myFunction(e) { 
    
    let messages = [];

    if (username.value==="" || username.value === null){
        messages.push('input username');
    }

    if (password.value==="" || password.value === null || password.value.length <= 6){
        messages.push('password must be > 6');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errordisplay.innerHTML = messages.join (" ,")

    }
    

})


open.addEventListener("click", function popUp() {
    form.classList.toggle('active');
    
})

close.addEventListener('click', function disappear() {
    form.classList.toggle('active');
    errordisplay.innerHTML = (" ");
    
})