import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function App() {
  const[gameTurns,setGameTurns] = useState([]);
  const activePLayer =deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex,colIndex){
    setGameTurns((prevTurns)=>{
      const currentPlayer=deriveActivePlayer(prevTurns);
      const  updatedTurns= [{square:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];
      return updatedTurns;
    })
  }
  

  return (
    <main>
      <div id ="game-container">
        <ol id='players' className="highlight-player">
          <Player name='Player 1' symbol='X' isActive={activePLayer==='X'}></Player>
          <Player name='Player 2' symbol='O' isActive={activePLayer==='O'}></Player>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
