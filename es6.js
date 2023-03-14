
const student = {
    name: 'Riyad khan',
    age: 22,
    class: 'diploma',
    subject: ['TTQC', 'Fashon Deisine']
};

//-------------------- template string ----------------------//
const user = `My name is ${student.name} I am ${student.age} years old, study of ${student.class}, My study subject is ${student.subject[0]}`;

// console.log(user);



//---------------------- arrow function ---------------------//
const doMatch = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

const sumResult = doMatch(10, 10);
// console.log(sumResult);



//---------------------- spread operator ----------------------//

const numbers = [43, 53, 12, 83];

const newNumbers = [...numbers];

const currentNumbers =[...numbers, 7]

numbers.push(77)
numbers.push(100)

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);