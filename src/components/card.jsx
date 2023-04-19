import React from "react";
import './card.css';

class Card extends React.Component {

    render() {
        return(
            <div className="card-div">
            <img id="image" src={this.props.src} alt="avatar"/>
            <h1>{this.props.fName} {this.props.lName}</h1>
            <p>{this.props.email}</p>
            </div>
        )
    }
}

export default Card;