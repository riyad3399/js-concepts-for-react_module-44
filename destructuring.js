//------------------------ array destructuring ------------------------//
const numbers = [34, 52];

// const num1 = numbers[0];
// const num2 = numbers[1];

const [num1, num2] = numbers;
// console.log(num1, num2);


const student = {
    name: 'Riyad khan',
    age: 22,
    class: 'diploma',
    subject: ['TTQC', 'Fashon Deisine'],
    hobis:['football', 'traveling', 'coding']
};

const [sub1, sub2] = student.subject;
// console.log(sub1, sub2);


//------------------------ object destructuring ----------------------//
const {age, name} = { name: 'farhad', age: 22, }

const { id, selary } = { id: 234, name: 'riyad', age: 22, selary: 50000 }
// console.log(id, selary);


const employee = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'windows',
    languages: ['HTML', 'css', 'js'],
    specification: {
        height: 55,
        weight: 50,
        address: 'Rosul pur',
        drink: 'water',
        watch: {
            color: 'Black',
            price: 500,
            brand: 'Rol ex'
        }
    }
};

const { ide, machine } = employee;
// console.log(ide, machine);
const { height, address } = employee.specification;
console.log(height, address);
const [language1, language2] = employee.languages;

const { color, brand } = employee.specification.watch;
console.log(color, brand);
