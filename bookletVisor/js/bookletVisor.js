var h = window.innerHeight;
var w = window.innerWidth;
var bookInit = document.getElementById('bookletVisor');
var r = 3;
var album = {};

function pages() {}

function enlargeImg() {
    console.log("Click Mathafacka")
}

function imgLoader() {

    var request = new XMLHttpRequest();
    request.open("GET", "https://api.myjson.com/bins/1dpvoh");
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            album = JSON.parse(request.responseText);
            console.log(album);
        }
    }
}

function ready() {
    centerElement(bookInit, h, w, r);
    resizeSquare(bookInit, w, r);
    imgLoader();
}


/* lightbox tutorial !!!!
https://www.w3schools.com/howto/howto_js_lightbox.asp
*/
