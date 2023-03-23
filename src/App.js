import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;

  // const products = [
  //   {name: 'laptop', price: 153000},
  //   {name: 'phone', price: 53000},
  //   {name: 'watch', price: 3000},
  //   {name: 'tablet', price: 5000},
  // ]

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