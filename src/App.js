import { useEffect, useState } from 'react';
import './App.css'
import Button from './components/button/Button';

function App () {
  const [counter, setCounter] = useState(0);
 
  const incrementCounter = (value) => {
    console.log(counter)
    setCounter((teste) => {
      console.log(teste);
      return counter + value;
    });
  }

  useEffect((x)=>{
    setTimeout(() => {
      console.log(x);
      console.log(counter)
      
    }, 500);
  },[counter]);

  
  return (
    <div className='App'>
      <h1>Hello</h1>
      <h2>{counter}</h2>
      
      <Button text="ClickHere" onClick={incrementCounter}>Increment</Button>
    </div>
  )
}
export default App;