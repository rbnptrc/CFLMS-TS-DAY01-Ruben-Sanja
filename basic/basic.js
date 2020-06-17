var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("OK");
function multiplybyOne() {
    var output = "";
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 1;
        output += array[i] + " X 1 = " + result + " <br>";
    }
    return output;
}
function multiplybyTwo() {
    var output = "";
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 2;
        output += array[i] + " X 1 = " + result + " <br> ";
    }
    return output;
}
function multiplybyTen() {
    var output = "";
    for (var i = 0; i < array.length; i++) {
        var result = array[i] * 10;
        output += array[i] + " X 1 = " + result + " <br>";
    }
    return output;
}
$(document).ready(function () {
    $("#one").on("click", function () {
        $("#resultOne").text("");
        $("#resultOne").append(multiplybyOne());
        $("#resultOne").append("<hr>");
        $("#resultOne").append(multiplybyTwo());
        $("#resultOne").append("<hr>");
        $("#resultOne").append(multiplybyTen());
    });
});
