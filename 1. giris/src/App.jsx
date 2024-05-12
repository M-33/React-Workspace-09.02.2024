import "./App.css";

function App() {
  let a = 15;
  const firstName = "Ali";
  let vize1 = 50;
  let vize2 = 80;
  let sonuc1 = true;
  let sonuc2 = false;

  let isimler = ["Ali", "Vedat", "Ipek", "Saliha"];

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <p style={{ backgroundColor: "orange" }}>a degiskenin degeri : {a}</p>
      <p style={{ background: "grey", border: "1px solid black" }}>
        Musterinin adi : {firstName}
      </p>
      <p style={{ background: "lightgreen" }}>
        Ortalama Not : {(vize1 + vize2) / 2}
      </p>
      {sonuc1 ? <p>Ehliyeti alabilirsiniz</p> : <p>Ehliyeti alamazsiniz!!!</p>}
      {sonuc2 ? <p>Eliyeti alabilirsiniz</p> : <p>Ehliyeti alamazsiniz!!!</p>}
      {(vize1 + vize2) / 2 >= 50 ? (
        <p>Sinavi gectiniz</p>
      ) : (
        <p>Sinavdan kaldiniz</p>
      )}

      {isimler.map((isim, index) => (
        <div
          style={{ backgroundColor: "purple", border: "1px solid black" }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
