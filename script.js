document.querySelectorAll("#amazon-img-anchor").forEach((link) => {
    link.addEventListener("click", () => {
        window.location.reload();
    })
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
})