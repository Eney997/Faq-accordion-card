const yvelah = document.querySelector("#hebisid")
const yvelap = document.querySelector("#pforjs")



for (let i = 0; i < yvelah.length; i++) {
    yvelah[i].addEventListener('click',()=>{
        yvelap[i].classList.toggle('active');

        for (let j = 0; c < yvelap.length; j++) {
            if (j !== i) {
                yvelap[c].classList.remove('active');
            }
        }
    });
}







// yvelah.addEventListener("click",()=>{
//     yvelap.classList.toggle("active")
// })










