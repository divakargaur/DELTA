// used to store keyed collections & complex entities
// property => (key, value) pair
// Objects are a collection of properties

const student = { // address is constant (similar to array)
    name: 'Div',
    age: 20,
    color: ['black', 'white']
} // but we can change the properties

console.log(student['name']);
console.log(student.name);

// variable case
let A = 'age';
console.log(student[A]);

// js converts the objects keys into string (even if it number/null/undefined)

// create a new property or changing the value of an existing key
student.gender = 'male';

// deleting the property
delete student.color;

// obj in obj
const classInfo = {
    newS: {
        inS: val
    }
}
console.log(classInfo.newS.inS);

// array of obj
// obj[i].key

// generating a random number between 21 to 25
console.log(Math.ceil(Math.random()*5)+20);