import { useState } from "react"

function Contador() {

    const [counter, setCounter] = useState(0);

    const increase = ()=> {
        setCounter( counter + 1)
    };


    const decrease = ()=> {
      if (counter > 0) {
        setCounter ( counter - 1 )
      }
    };


  return (

    <div>
        <button onClick={ increase } className="btn">+</button>
        <div className="">{counter}</div>
        <button onClick={ decrease } className="btn">-</button>
    </div>
  )
};

export default Contador