

console.log("===================Step 01====================");
function maleMarriageEligibility(gender, age, boyName){
    var result = gender=='Male' && age>=21
    ? 'Hey  Billgates you are eligible for marriage ,Congrats!'
    : 'Sorry, Stew Jobs you are not eligible for marriage, try next time';
    return result;
}
var result = maleMarriageEligibility("Male", "25", "Billgates");
console.log(result);
var result = maleMarriageEligibility("Male", "20", "Billgates");
console.log('age',result);

console.log("===================Step 02====================");
function femaleMarriageEligibility(gender, age, girlName){
    var result = gender=='Female' && age>=18
    ? 'Hey Jenifer  you are eligible for marriage ,Congrats!'
    : 'Sorry, Malinda Gates you are not eligible for marriage, try next time';
    return result;
}
var result = femaleMarriageEligibility("Female", "16", "Jenifer");
console.log(result);
var result = femaleMarriageEligibility("Female", "27", "Malinda Gates");
console.log(result);