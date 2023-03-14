// let myMoney = 50;
// // you chack nagetiv or falsy anything
// if (!myMoney) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }


const money = 800;
const myVar = 90;
let food;
if (money > 100) {
    food = 'birani';
}
else {
    food = 'cha diya biscuate kha';
}
// console.log(food);

         //------------- ternary -------------//
const food1 = money > 100 ? 'dom biriyani' : 'cha diya bon kha';
// console.log(food1);
const drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);




//------------- string to number convert ----------------//
const num = 50;
const numSrt = num + '';
// console.log(numSrt);


// ---------------- string to number convert ------------------//
const input = '599';
const inputNum = +input;
// console.log(inputNum);



//
const isActive = false;
const shoUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? shoUser() : hideUser();
