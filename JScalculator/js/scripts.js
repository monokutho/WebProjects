var result = 0;
var acc = 0;
var cur = 0;
var entry = 0;
var calBody = document.getElementById('calBody');
var calDisplay = document.getElementById('calDisplay');
var h = window.innerHeight;
var w = window.innerWidth;

function userInput() {
    
}

function add(acc, cur) {
    return acc + cur;
}

function substract(acc, cur) {
    return acc - cur;
}

function multiply(acc, cur) {
    return acc * cur;
}

function divide(acc, cur) {
    return acc / cur;
}

function equal(cur) {
    return acc;
}

function point() {}

function allClear() {}

function clearEntry() {}

function init() {
    centerElement(calBody, h, w, resizeBox(calBody, h, w, 1.6, 3.5))
    resizeBox(calDisplay, h, w, 6, 4);
}