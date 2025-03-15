const barBtns = document.querySelectorAll(".fa-bars");
const navBar = document.querySelector(".content-bars");

barBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        navBar.classList.toggle("active");
    })
})