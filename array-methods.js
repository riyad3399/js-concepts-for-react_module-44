// ---------------- array of object -----------------//
const products = [
    { name: 'laptop', price: 5000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 10000, brand: 'samsung', color: 'black' },
    { name: 'sunglass', price: 500, brand: 'ribon', color: 'black' },
    { name: 'watch', price: 2000, brand: 'Rolex', color: 'silver' },
    { name: 'camera', price: 8000, brand: 'canon', color: 'black' },
];


//------------------------- map ------------------------//
const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price);
// console.log(prices);

const names = products.map(product => product.name);
// console.log(names);




//------------------------------ forEach ----------------------------//
products.forEach(product => {
    // console.log(product.brand);
})

products.forEach(product => {
    // console.log(product.color);
})

products.forEach(product => {
    // console.log(product.name);
})



// ------------------------ filter -------------------------
const cheap = products.filter(product => product.price < 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('e'));
// console.log(specificName);