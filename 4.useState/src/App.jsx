import { useState } from "react";
import "./App.css";

function Counter() {
  // useState kullanarak sayaç değerini ve setCounter fonksiyonunu tanımlıyoruz
  const [counter, setCounter] = useState(0);

  // Artırma fonksiyonu
  const incrementCounter = () => {
    setCounter(counter + 1); // setCounter ile sayaç değerini artırıyoruz
  };
  // Azaltma fonksiyonu
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1); // setCounter ile sayaç değerini azaltıyoruz
    }
  };
  console.log("Component render edildi!!!");

  return (
    <div>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
      </div>

      <hr />
      <div>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
