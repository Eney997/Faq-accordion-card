let allh = document.querySelectorAll("#hebisid")
let allp = document.querySelectorAll("#pforjs")
let arrow = document.querySelectorAll("#arrowid")


let i = 0;
while(i < allh.length){
    let index = i
   allh[i].addEventListener('click', function () {
        allp[index].classList.toggle('active');
        arrow[index].classList.toggle('rotate');
        
        let j = 0;
        while(j < allp.length){
            if (j !== index) {
                allp[j].classList.remove('active');
                arrow[j].classList.remove('rotate');
            }
            j++;
        }
    });
    i++;
}

