import React from 'react';
import Game from '../Game/Game';


const Games = (props) => {
    return (
    	<div>
    		{props.gamesList.map(game => {
    			return (
    				<Game 
    					key = {game._id}
    					id = {game._id}
						title = {game.title}
						description = {game.description}
						imageUrl = {game.imageUrl}
						deleteGame = {props.deleteGame}
		        	/>
    				);
    			}
    		)}
    	</div>
    );
}

export default Games;