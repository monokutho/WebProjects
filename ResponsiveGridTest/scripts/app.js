function resize(){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var intro = document.getElementById(`intro`);
    var square = document.getElementsByClassName(`square`);

    intro.style.width = w+`px`;
    intro.style.height = h+`px`;

    for (var i = 0; i < square.length; i++) {
        square[i].style.width = w/2+`px`;
        square[i].style.height = h/2+`px`;
    }
}

resize();

window.addEventListener("resize", resize);





