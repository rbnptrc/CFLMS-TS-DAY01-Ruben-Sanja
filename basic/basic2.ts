var array : Array<number> = [1,2,3,4,5,6,7,8,9,10];
function printLater() {
    setTimeout(()=> {
        array.forEach(element => {
        $("#resultTwo").append(`Bunny<br>`);
    })   
    },5000)}

$(document).ready(function(){
    $("#resultTwo").append(`Bugs Bunny<br>`);
    array.forEach(element => {
        $("#resultTwo").append(`Bugs<br>`);
    });
    printLater();
});