let ratingOption = document.querySelectorAll(".rating-options")
let ratings = document.querySelector("span")
let mainClass = document.querySelector(".container")
let submitBtn = document.querySelector("button")
let submitSec = document.querySelector(".submit")
let alertMsg = document.querySelector(".alert")


for (let i = 0; i < ratingOption.length; i++) {
    ratingOption[i].addEventListener('click', ratingSelection)
}

function ratingSelection() {

    ratings.textContent = ratingOption[this.innerText - 1].innerText

}

submitBtn.addEventListener('click', submitButton)

function submitButton() {
    if (ratings.textContent > 0) {
        mainClass.classList.add("visible")
        submitSec.classList.toggle("show-class")
    } else {
        alertMsg.classList.toggle('alert')
    }
}
