import React, { Component } from 'react';
import List from './List.js';
import './App.css';

function addToList(store, listIndex, newCardId) {
  const listToAddTo = { ...store.lists[listIndex] };
  listToAddTo.cardIds = [...listToAddTo.cardIds, newCardId];
  const storeCopy = { ...store };
  storeCopy.lists[listIndex] = listToAddTo;
  return storeCopy;
}

function deleteFromList(store, listIndex, cardIndexToDelete) {
  const listToRemoveFrom = { ...store.lists[listIndex] };
  listToRemoveFrom.cardIds = listToRemoveFrom.cardIds.filter((id, index) => index !== cardIndexToDelete)
  const storeCopy = { ...store };
  storeCopy.lists[listIndex] = listToRemoveFrom;
  return storeCopy;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.state = {
      store: {
        lists: [
          {
            id: 1,
            header: 'First list',
            cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
          },
          {
            id: 2,
            header: 'Second list',
            cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
          },
          {
            id: 3,
            header: 'Third list',
            cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
          },
          {
            id: 4,
            header: 'Fourth list',
            cardIds: ['l', 'm'],
          },
        ],
        allCards: {
          'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
          'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
          'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
          'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
          'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
          'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
          'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
          'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
          'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
          'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
          'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
          'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
          'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
        },
      }
    }
  }
  addCard = (index) => {
    const cards = Object.keys(this.state.store.allCards);
    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    this.setState({ store: addToList(this.state.store, index, randomCard) })
  }
  deleteCard(cardIndexToDelete, listIndex) {
    this.setState({ store: deleteFromList(this.state.store, listIndex, cardIndexToDelete) })
  }
  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.state.store.lists.map((list, index) => {
            const cardsForList = list.cardIds.map(id => this.state.store.allCards[id])
            return (
              <List
                index={index}
                key={index}
                header={this.state.store.lists[index].header}
                addCard={this.addCard}
                deleteCard={this.deleteCard}
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
