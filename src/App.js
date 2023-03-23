import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products = [
    {name: 'laptop', price: 153000},
    {name: 'phone', price: 53000},
    {name: 'watch', price: 3000},
    {name: 'tablet', price: 5000},
  ]
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [] = useState
  return (
    <div>
      <h1>Count: </h1>
      <button>Increase</button>
    </div>
  )
}

export default App;


// {
//   products.map(product => <Product name={product.name} price={product.price}></Product>)
// }
// {/* <Product name = "laptop" price="47000"></Product>
// <Product name = "phone" price="75000"></Product>
// <Product name = "watch" price="5000"></Product> */}

// function Product(props){
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: </p>
//     </div>
//   )
// }