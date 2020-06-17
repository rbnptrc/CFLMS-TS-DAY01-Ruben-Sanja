var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function multiplybyOne() {
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 1;
        return array[i] + " X 1 = " + result;
    }
}
function multiplybyTwo() {
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 2;
        return array[i] + " X 2 = " + result;
    }
}
var multiplybyTen = function () {
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 10;
        return array[i] + " X 10 = " + result;
    }
};
var results = document.getElementById("resultOne");
var btn = document.getElementById("one");
btn.addEventlistener("click", multiplybyOne);
