import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => {
    return (
	    <div>
	        <h1>Games</h1>
	        	{
	        		// can I do it without adding a button ???   -->   click on img?
	        	}
	        <button className='react-logo' onClick={props.regenerateGames}>   
	        	<img src={logo} className="App-logo" alt="logo" />
	        </button>

	        <h1>World</h1>
	    </div>
    );
}

export default Header;