 const numbers = [3,4,6,5,4,2,7,8,9];
const output =[];
for(let i = 0; i< numbers.length; i++){
    const elements = numbers [i];
    const result = elements * elements;
    output.push(result);
}
function square(element){
    return element * element;
}

const square = element => element * element;
const square =x =>x*x;
const result =numbers.map(function(element){
    return element * element;
 
})
const result = numbers.map(x => x * x);
console.log(result);

const result = numbers.filter(x => x <5);

const isThere = numbers.find(x => x>5);
console.log(isThere);