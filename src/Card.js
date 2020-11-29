import React from 'react';
import './Card.css'


class Card extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {};
        this.deleteCard = this.deleteCard.bind(this);
    }
    deleteCard(e) {
        console.log('delete button pressed');
    }
    render() {
        return (
            <div className="Card">
                <button type="button" onClick={this.deleteCard}>delete</button>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default Card;