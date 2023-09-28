



console.log("=====swap=====");
function swap(valueOne, valueTwo){
    console.log('Before swap ==>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After swap ==>', valueOne, valueTwo);
}
swap(100,200);

function square(num){
    var result = num * num;
    return result;
}
var squareNum = square(5);
console.log('Num is 5 and its square is', squareNum);