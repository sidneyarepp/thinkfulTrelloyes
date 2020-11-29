import React, { Component } from 'react';
import List from './List.js';
import store from './store.js';
import './App.css';

// Store prop with two keys, lists (array of objects) and allCards (object where each key is a card's ID and the value is the card object with a title and content).

//List component should be rendered for each item in the store lists array

class App extends Component {
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list, index) => {
            const cardsForList = list.cardIds.map(id => store.allCards[id])
            return (
              <List
                index={index}
                key={list.id}
                header={list.header}
                cards={cardsForList}
              />
            )
          })}
        </div>
      </main>
    );
  }
}

export default App;
