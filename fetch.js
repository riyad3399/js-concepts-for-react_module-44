// fetch('utl')
//     .then(res => res.json())
//     .then(data => console.log(data))








    //---------------- array of object -----------------//
    const products = [
        { name: 'laptop', price: 5000, brand: 'lenovo', color: 'silver' },
        { name: 'phone', price: 10000, brand: 'samsung', color: 'black' },
        { name: 'sunglass', price: 500, brand: 'ribon', color: 'black' },
        { name: 'watch', price: 2000, brand: 'Rolex', color: 'silver' },
        { name: 'camera', price: 8000, brand: 'canon', color: 'black' },
];
    

const newProduct = { name: 'webcam', price: 500, brand: 'lola' };

// copy products array and then add new product
const newProducts = [...products, newProduct]
// console.log(newProducts);

const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);
