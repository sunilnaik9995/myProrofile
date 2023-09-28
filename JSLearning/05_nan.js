

var n1 = 0;
var n2 = 0;
var result = n1/n2;
console.log(result);
console.log(typeof result);

var num = "20";
console.log(num,typeof num);
var result = +num;
console.log(num,typeof result);

var num1 = "jenny";
result = +num1;
console.log(result);

var n1 = "20";
var n2 = 20;
console.log(n1==n2);

console.log(n1, typeof n1);
n1=+n1;
console.log(n1,typeof n1);

console.log('4'-true);



console.log("====Explicit=====");
var n1 = "20";
var n2 = Number(n1);
console.log(n2,typeof n2);
var isMarried = true;
var result = Number(isMarried);
console.log(result, typeof result);

console.log("========");
var n4 = 30;
var result = String(n4);
console.log(result, typeof result);

var result =Boolean("Jenny");
console.log(result, typeof result);

var result =Boolean('');
console.log(result, typeof result);