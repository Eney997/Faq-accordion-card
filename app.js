const yvelah = document.querySelector("#hebisid")
const yvelap = document.querySelector("#pforjs")
const arrow = document.querySelector("#arrowid")


yvelah.addEventListener("click",()=>{
    yvelap.classList.toggle("active")
    arrow.classList.toggle("rotate")
})