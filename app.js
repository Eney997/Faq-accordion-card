let allh = document.querySelectorAll("#hebisid")
let allp = document.querySelectorAll("#pforjs")
let arrow = document.querySelectorAll("#arrowid")


for (let i = 0; i < allh.length; i++) {
    allh[i].addEventListener('click', function(){
        allp[i].classList.toggle('active');
        arrow[i].classList.toggle("rotate")

        for (let j = 0; j < allp.length; j++) {
            if (j !== i) {
                allp[j].classList.remove('active');
                arrow[j].classList.remove("rotate")
            }
        }
    })
}
