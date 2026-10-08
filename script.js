document.querySelector("#amazon-img-anchor").addEventListener("click", () => {
    window.location.reload();
})

document.querySelector("#button").addEventListener("click", () => {
    window.location.reload();
})

let chooseLocation = document.querySelector(".choose-location");
document.querySelector("#location-anchor").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.querySelector(".overlay").classList.remove("hide");
    chooseLocation.classList.remove("hide");
    setTimeout(() => {
        document.querySelector(".loader-parent").classList.add("hide");
        document.querySelector(".choose-location-child-2").classList.remove("hide");
    }, 2000)
})

document.querySelector("#x-mark").addEventListener("click", () => {
    document.body.style.overflow = "";
    chooseLocation.classList.add("hide");
    document.querySelector(".loader-parent").classList.remove("hide");
    document.querySelector(".choose-location-child-2").classList.add("hide");
    document.querySelector(".overlay").classList.add("hide");
    document.querySelector(".change-language").classList.add("hide");
})

document.querySelector("#language").addEventListener("click", () => {
    document.querySelector(".change-language").classList.remove("hide");
    document.querySelector(".overlay").classList.remove("hide");
    document.body.style.overflow = "hidden";
})

document.querySelector("#x-mark-2").addEventListener("click", () => {
    document.querySelector(".change-language").classList.add("hide");
    document.querySelector(".overlay").classList.add("hide");
    document.body.style.overflow = "";
})