import './App.css';
import Squre from './components/Squre';
import Squre2 from './components/components2/Squre2';
import Squre3 from './components/components2/components3/Squre3';
import { useState } from 'react';

function App() {
  // let a = 2

  let [a, setA] = useState(2);

  function buttonClicked(event) {
    console.log("button has clicked")
    // a  += 1
    setA(a + 1)
    console.log(a)
  }

  function buttonMinus(event) {
    setA(a - 1)
  }


  return (
    <div className="App">
      <button onClick={buttonMinus}>-</button>
      {a}
      <button onClick={buttonClicked}>+</button>
      JSX
      help
      <Squre sidelenght={7} areaSqure={"lerka-taburetka"} peq={"lerka-pecherka"}></Squre>
      <Squre2 sidelenght={4}></Squre2>

    </div>
  );
}


export default App;
