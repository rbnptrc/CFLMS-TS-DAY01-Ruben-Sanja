var names : Array<string> = ['Tom', 'Jerry', 'Tweety', 'Silvester'];

function indexAndValue(){
    for (let index in names) {
        $("#resultThree").append(`The index is: ${index} and the value is: ${names[index]} <hr>`);
         
      
}
};


function valuesOfElements(){
    for (let i of names) {
        $("#resultThree").append(i + `<hr>`);
    }
}

function indexOfElement(){
      for (let index in names) {
   $("#resultThree").append(index +`<hr>`);
}
}

$(document).ready(function () {
    $("#third").on("click", function(){
        $("#resultThree").text("");
        indexAndValue();
        indexOfElement();
        valuesOfElements();
    });


});

