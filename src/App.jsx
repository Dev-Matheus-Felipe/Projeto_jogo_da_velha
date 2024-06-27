import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [game,setGame] = useState([0,0,0,0,0,0,0,0,0]);
  const [jogador,setJogador] = useState(1);
  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const verificarVitoria = (newArray) => {
    for (let i = 0; i < combinacoesVencedoras.length; i++) {
      const [a, b, c] = combinacoesVencedoras[i];
      if (newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]) {
        return newArray[a];
      }
    }
  }

  const jogar = (index)=>{
    let newArray  = [...game];

    newArray[index] = (jogador === 1) ? "X" : "O";

    
    (jogador === 1)
      ? setJogador(2)
      : setJogador(1)

    setGame(newArray);

    const ganhador = verificarVitoria(newArray);
    if (ganhador) {
      (jogador === 1) ? alert("Jogador 1 venceu!") :  alert("Jogador 2 venceu!");
      window.location.reload();
    } else {
      setJogador((jogador === 1) ? 2 : 1);
    }

  }

  useEffect((e)=>{
    let contador = 0;

    game.map((e)=>{
      if(e === 0){
        contador = 1;
      }
    });

    if(contador === 0){
      alert("Deu velha!!");
      window.location.reload();
    }
  },[game])

  return (
    <div className="app">
      <div className="jogo_da_velha">
      {
        game.map((value,index)=>(
          (value !== 0) 
            ? <div className='quadrado' key={index} onClick={()=>jogar(index)}>{value}</div>
            : <div className='quadrado' key={index} onClick={()=>jogar(index)}></div>
        ))
      }
      </div>
      
    </div>
  )
}

export default App
