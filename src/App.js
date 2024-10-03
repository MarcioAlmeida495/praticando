import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
//import Button from './components/button/Button';

const Button = React.memo(({incrementCounter, text}) => {
  console.log('filho Renderizou');
  return <button type='button' onClick={() => {incrementCounter(20)}}>{text}</button>
})

function App () {
  const [counter, setCounter] = useState(0);
  console.log('pai Renderizou');

  const incrementButton = useCallback((num) => {
    console.log('testando pra ver se mudou');
    setCounter((c) => c + num);
  }, []);
  
  useEffect(()=>{
    
    console.log('so pra parar de encher o saco');
  },[]);
  return (
    <div className='App'>
      <h1>Hello</h1>
      <h2>{counter}</h2>
      
      <Button text="Incremente" incrementCounter={incrementButton} />
    </div>
  )
}
export default App;