import React, { useEffect, useState} from "react";
import api from "./service/api";
import  "./App.css";

function App() {
  const [hero, setHero] = useState();

  useEffect(() => {
    api
      .get("/1")
      .then((response) => setHero(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  return (
    <div className="App">
      <p>Nome: {hero?.name}</p>
      <img className="heroImg" src={hero?.image.url}></img>
    </div>
  );
}

export default App;
