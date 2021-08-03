{
    const themeChange = () => {
        const bodyElement = document.querySelector(".js-body")
        const themeName = document.querySelector(".js-themeName")
        bodyElement.classList.toggle("body--dark");
        themeName.innerText = bodyElement.classList.contains("body--dark")
            ? "Jasny"
            : "Ciemny";
    };
    const init = () => {
        const toggleBackgroundButton = document.querySelector(".js-onChangeBackgroundButton")
        toggleBackgroundButton.addEventListener("click", themeChange);
    }

    init();
}