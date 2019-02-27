import React, { Component } from 'react';
import Games from './components/Games/Games';
import Header from './components/Header/Header';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://games-world.herokuapp.com/',
      gamesList: []
    };
  }

  getGames = () => {
    return fetch(this.state.url + 'games/')
      .then(response => response.json())
      .then(data => {
        this.setState({gamesList: data});
        console.log('Games from componentDidMount: ', data);
      });
  }

  componentDidMount() {
    this.getGames();
  }

  deleteGame = (gameID) => {                                                                                // ES5: deleteGame(gameID) { ... }  -->  "this" changes !!!
    // How to remove a game from page without refreshing ???????? 
    // Not good practice to remove components ?
    // Remove/hide it with state somehow ? --> update state => render again
    fetch(this.state.url + 'games/' + gameID, {
      method: 'DELETE',
      headers:{ 'Content-Type': 'application/json' },
    })

    // JSON.parse('json_format') --> javascript_object.           
    // JSON.stringify(javascript_object) --> 'json_format'
    // What about "res.json()"   ?????????

    .then(response => console.log('Success! Game deleted:', JSON.stringify(response))) // WHY empty object ????
    .then(this.getGames)
    .catch(error => console.error('Errorrrrrrrrrrrrrrrrr:', error));
  }

  regenerateGames = () => { 
    fetch(this.state.url + 'regenerate-games')
      .then(response => console.log(response))
      .catch(err => console.log('Error! ', err))   // what if I get an error? 
  }

  render() {
    return (
      <div className="App">
        <Header 
          regenerateGames = {this.regenerateGames}
        />
        <Games 
          gamesList = {this.state.gamesList}
          deleteGame = {this.deleteGame}
        />
      </div>
    );
  }
}


export default App;