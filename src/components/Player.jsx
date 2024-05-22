import { useState } from "react";


export default function Player({name,symbol,isActive}){

    const [isEditing, setIsEditing]=useState(false);
    const [playerName,setPlayerName]=useState(name);
  function handleEditClick(){
    setIsEditing((editing)=>!editing);
  }
  function handleChange(event){
    console.log(event.target.value)
    setPlayerName(event.target.value);

  }

  let editablePlayerName= <span className="player-name">{playerName}</span>;
  let btnCaption='Edit';

  if(isEditing){
    editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
    btnCaption='Save'
  }
    return (
        <li className={isActive?'active':undefined}><span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span></span>
        <button onClick={handleEditClick}>{btnCaption}</button>
        </li>
    );
}