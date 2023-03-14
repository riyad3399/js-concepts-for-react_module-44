//------------------------- JSON ---------------------------//
const student = {
    name: 'Riyad khan',
    age: 22,
    class: 'diploma',
    subject: ['TTQC', 'Fashon Deisine']
};

console.log(student);
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);