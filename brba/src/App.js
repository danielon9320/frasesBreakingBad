import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  const [frasesBreakingBad, setFrasesBreakingBad] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setLoader(true);
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const resp = await api.json();
    console.log(api);
    console.log(resp);
    setTimeout(() => {
      setFrasesBreakingBad(resp[0]);
      setLoader(false);
    }, 1500);
  };

  const cargarComponente = loader ? (
    <Spinner></Spinner>
  ) : (
    <Frase frasesBreakingBad={frasesBreakingBad}></Frase>
  );

  return (
    <section className="container text-center">
      <article className="d-flex flex-column align-items-center">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          className="w-40 my-4 py-4 img-fluid"
          alt="logo"
        ></img>
        <button
          className="btn btn-success shadow my-3"
          onClick={() => consultarAPI()}
        >
          Obtener Frase
        </button>
      </article>
      {cargarComponente}
    </section>
  );
}

export default App;
