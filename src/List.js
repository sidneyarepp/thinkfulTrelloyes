import React from 'react';
import Card from './Card.js';
import './List.css'

class List extends React.Component {
    static defaultProps = {
        cards: [],
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="List">
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className="List-cards">
                    {this.props.cards.map((card, index) =>
                        <Card
                            key={index}
                            index={index}
                            title={card.title}
                            deleteCard={() => { this.props.deleteCard(index, this.props.index) }}
                            content={card.content}
                        />
                    )}
                    <button type="button" className="List-add-button" onClick={() => { this.props.addCard(this.props.index) }}>
                        + Add Random Card
                </button>
                </div>
            </section>
        )
    }
}

export default List;