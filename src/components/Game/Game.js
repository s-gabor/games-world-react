import React from 'react';
import './Game.css';

const Game = (props) => {
    return (
      <div className='collored'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.imageUrl} alt="url"/>
        <div>
        	<button onClick = {() => props.deleteGame(props.id)} >Delete</button>
        </div>
      </div>
    );
}

export default Game;