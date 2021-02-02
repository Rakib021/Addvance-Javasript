const students = [
    {id : 21 ,name :' omar sunny'},
    {id: 31 , name : 'mannanana'},
    
    {id :41 , name : 'moyori'},
    {id :51 , name : 'dipjol'}

];
// const array =[];
// for(let i = 0; i < students.length; i++){
//     const element= students[i];
//     const result = students.name;
//     const names=array.push(result);
// }
// console.log(array);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>30);
const findOut = students.find(s =>s.id >30);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(findOut);