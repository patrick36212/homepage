console.log("Hello World! I am here to show you my skills")
console.log("And I can see it works, hopefully longer than I can imagine")

let button = document.querySelector(".js-button")
let body = document.querySelector(".js-body")

button.addEventListener("click", () => {
    if (button.innerText === "Ciemny") {
        button.innerText = "Jasny";
    } else button.innerText = "Ciemny";
})
button.addEventListener("click", () => {
    if (button.innerText === "Jasny") {
        body.classList.add("body__dark");
    } else body.classList.remove("body__dark");
})