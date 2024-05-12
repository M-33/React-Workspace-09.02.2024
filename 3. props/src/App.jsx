import React, { useState } from "react";
import "./App.css";

import Product from "./Product";

function App() {
  const [firstName , setFirstName] = useState
  return (
    <>
      <div style={{ fontFamily: "initial", fontSize: "30px" }}>
        <Product productName="Shoes" price={50} />
        <hr />
        <Product productName="Trousers" price={30} />
      </div>
    </>
  );
}

export default App;
