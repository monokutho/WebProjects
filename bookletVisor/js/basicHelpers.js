//centra el elemento (responsive)
function centerElement(a, h, w, r) {
    var top = h / 2 + "px",
        left = w / 2 + "px",
        margin = (w / r) / 2;
    a.style.top = top;
    a.style.left = left;
    a.style.marginTop = "-" + margin + "px";
    a.style.marginLeft = "-" + margin + "px";;
}

// responsive resize
function resizeSquare(b, w, r) {
    b.style.height = w / r + "px";
    b.style.width = w / r + "px";
}
