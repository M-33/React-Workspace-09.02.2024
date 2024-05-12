// eslint-disable-next-line no-unused-vars
import React from "react";

function Login() {
  return (
    <div>
      <div>
        <p style={{ color: "black", fontFamily: "fantasy" }}>
          Kullanici Adiniz
        </p>
        <input type="text" />
      </div>
      <div>
        <p style={{ color: "black", fontFamily: "fantasy" }}>Sifreniz</p>
        <input type="text" />
      </div>

      <button style={{ margin: "20px", background: "lightgrey" }}>
        Giris Yap
      </button>
    </div>
  );
}

export default Login;
