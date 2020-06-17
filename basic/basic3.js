var names = ['Tom', 'Jerry', 'Tweety', 'Silvester'];
function indexAndValue() {
    for (var index in names) {
        $("#resultThree").append("The index is: " + index + " and the value is: " + names[index] + " <hr>");
    }
}
;
function valuesOfElements() {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var i = names_1[_i];
        $("#resultThree").append(i + "<hr>");
    }
}
function indexOfElement() {
    for (var index in names) {
        $("#resultThree").append(index + "<hr>");
    }
}
$(document).ready(function () {
    $("#third").on("click", function () {
        $("#resultThree").text("");
        indexAndValue();
        indexOfElement();
        valuesOfElements();
    });
});
