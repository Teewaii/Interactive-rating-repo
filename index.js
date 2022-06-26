const ratingOption = document.querySelectorAll(".rating-options");
const ratings = document.querySelector("span");
const mainClass = document.querySelector(".container");
const submitBtn = document.querySelector("button");
const submitSec = document.querySelector(".submit");
const alertMsg = document.querySelector(".alert");


for (let i = 0; i < ratingOption.length; i++) {
    ratingOption[i].addEventListener('click', ratingSelection);
}

function ratingSelection() {
    ratings.textContent = ratingOption[this.innerText - 1].innerText;  
    
}

submitBtn.addEventListener('click', submitButton);

function submitButton() {
    if (ratings.textContent > 0) {
        mainClass.classList.add("visible");
        submitSec.classList.toggle("show-class");
    } else {
        alertMsg.classList.toggle('alert');       
        alertMsg.innerText ='Please select a valid rating value';
    }
}
