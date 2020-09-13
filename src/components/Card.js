import React from "react";

function Card({ card, onCardClick }) {
    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="pictures__item">
            <button className="button pictures__delete opacity" type="button" />
            <img className="pictures__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="pictures__cover">
                <p className="pictures__title">{card.name}</p>
                <div className="pictures__like-cover">
                    <button className="button pictures__like opacity" type="button"/>
                    <span className="pictures__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;