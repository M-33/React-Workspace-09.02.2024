import React from "react";

function Product(props) {
  console.log(props);
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>Product Information</div>

      <div>
        <div>Name1 : {props.productName}</div>
        <div>Price: {props.price}</div>
      </div>
    </div>
  );
}

export default Product;
