import React from 'react';
import Card from './Card.js';
import store from './store.js';
import './List.css'

class List extends React.Component {
    static defaultProps = {
        cards: [],
    }
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
    }
    addCard() {
        store.lists[this.props.index].cardIds.push('m');
        console.log(store.lists[this.props.index].cardIds)
    }
    render() {
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.cards.map((card) =>
                        <Card
                            key={card.id}
                            title={card.title}
                            content={card.content}
                        />
                    )}
                    <button type="button" className="List-add-button" onClick={this.addCard}>
                        + Add Random Card
                </button>
                </div>
            </section>
        )
    }
}

export default List;