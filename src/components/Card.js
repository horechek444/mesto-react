import React from "react";

function Card(props) {
    const handleClick = () => {
        props.onCardClick(props.card);
    }
    console.log(props);
    return (
        <li className="pictures__item">
            <button className="button pictures__delete opacity" type="button" />
            <img className="pictures__image" src={props.link} alt={props.name} onClick={handleClick} />
            <div className="pictures__cover">
                <p className="pictures__title">{props.name}</p>
                <div className="pictures__like-cover">
                    <button className="button pictures__like opacity" type="button"/>
                    <span className="pictures__like-counter">{props.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;