var array : Array<number> = [1,2,3,4,5,6,7,8,9,10];

function multiplybyOne() {
    for (let i = 0; i < array.length; i++) {
        let result : number = array[i]*1;
        return `${array[i]} X 1 = ${result}`;
    }
}

function multiplybyTwo() {
    for (let i = 0; i < array.length; i++) {
        let result : number = array[i]*2;
        return `${array[i]} X 2 = ${result}`;
    }
}

let multiplybyTen = function() {
    for (let i = 0; i < array.length; i++) {
        let result : number = array[i]*10;
        return `${array[i]} X 10 = ${result}`;
    }
}

let results : any = document.getElementById("resultOne");
let btn : any = document.getElementById("one");
btn.addEventlistener("click", multiplybyOne)

