

const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const clabel = document.getElementById("clabel");

let count = 0;

decreasebtn.onclick = function() {
    if (count > 0) {
    count--;
    clabel.textContent = count;
    }
}

resetbtn.onclick = function() {
    count = 0;
    clabel.textContent = count
}
increasebtn.onclick = function(){
    count++;
    clabel.textContent = count;
}

