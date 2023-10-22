import './App.css';
import { useState } from 'react';
import * as math from "mathjs";
import Button from './Components/Button';
import Input from './Components/Input';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const App = () => {

  const [text , setText] = useState("")
  const [result , setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  } ;

  const resetInput = () => {
    setText("");
    setResult("");
  }

  const calculateResult = () =>{
    const input = text.join("")

    setResult(math.evaluate(input))
  }


  return (
    <div className="App">
      <div className='CalcWrapper m-4 rounded '>
        <div className='top-bar'>
          <div className='White-circle'></div>
        </div>
        <Input text={text} result={result}></Input>
          <div className='row'>
            <Button symbol={7} handelClick={addToText}/>
            <Button symbol={8} handelClick={addToText}/>
            <Button symbol={9} handelClick={addToText}/>
            <Button symbol={'/'} handelClick={addToText}/>
          </div>
          <div className='row'>
            <Button symbol={4} handelClick={addToText}/>
            <Button symbol={5} handelClick={addToText}/>
            <Button symbol={6} handelClick={addToText}/>
            <Button symbol= '*' handelClick={addToText}/>
          </div>
          <div className='row'>
            <Button symbol={1} handelClick={addToText}/>
            <Button symbol={2} handelClick={addToText}/>
            <Button symbol={3} handelClick={addToText}/>
            <Button symbol={'+'} handelClick={addToText}/>
          </div>
          <div className='row'>
            <Button symbol={0} handelClick={addToText}/>
            <Button symbol={'.'} handelClick={addToText}/>
            <Button symbol={'='} handelClick={calculateResult}/>
            <Button symbol={'-'} handelClick={addToText}/>
          </div>
        <Button symbol={'Clear'} handelClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
