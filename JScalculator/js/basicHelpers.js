//centra el elemento (responsive)
function centerElement(a, h, w, arr) {
    var top = h / 2 + "px"
        , left = w / 2 + "px";
    a.style.top = top;
    a.style.left = left;
    a.style.marginTop = "-" + arr[0] / 2 + "px";
    a.style.marginLeft = "-" + arr[1] / 2 + "px";
}
// responsive resize perfect square
function resizeSquare(b, w, r) {
    b.style.height = w / r + "px";
    b.style.width = w / r + "px";
}
// responsive resize box
function resizeBox(box, h, w, a, b) {
    var resizedHeigth = h / a;
    var resizedWidth = w / b;
    box.style.height = resizedHeigth  + "px";
    box.style.width = resizedWidth + "px";

    return [resizedHeigth , resizedWidth]
}