import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  useEffect(() => {
    // Bu kod her render sonrası çalışır.
    console.log("Component rendered or updated");
  });
  // Opsiyonel olarak bir temizleme fonksiyonu döndürebilirsiniz.

  useEffect(() => {
    console.log("Component will unmount or update");
  }, []); // Boş bağımlılık dizisi sadece bir kez çalışmasını sağlar (component mount).

  useEffect(() => {
    console.log("Component will unmount or update");
  }, [firstName, lastname]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Murat")}>Name Change</button>
      </div>
      <div>
        <button onClick={() => setLastName("Murat")}>Lastname Change</button>
      </div>
    </div>
  );
}
export default App;
