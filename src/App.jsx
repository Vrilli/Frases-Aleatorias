import React, { useEffect, useState } from "react"
import Frase from "./components/Frase";
import { Spinner } from "./components/Spinner";


const initialFrase = {
  text: "Frase",
  author: "Autor :)"
}

function App() {
  const [frase, setFrase] = useState(initialFrase);
   const [loading, setLoading] = useState(false)

  const updateFrase = async () => {
    setLoading(true)
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newFrase] = await res.json();
    

    const {quote: text, author} = newFrase;

    setFrase({
      text,
      author
    });

    setLoading(false)
  }


  useEffect(() => {
    updateFrase();
    
  }, []);
  


  return (
    <div className="app">
      <img src="https://i.pinimg.com/originals/cd/76/cf/cd76cf6c9a9df9a90181cb0fb8646853.jpg" 
      alt="logo"
      />
      <button onClick={() => updateFrase()}>Cambiar de Frase</button>
       {loading ? <Spinner />:  <Frase frase={frase}/>}

    </div>
  );
}

export default App;
