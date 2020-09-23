import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        const promise = isLiked ? api.dislikeCard(card._id) : api.likeCard(card._id);
        promise
            .then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
            })
            .catch((err) => {
            console.log(`${err}`);
            });
    }

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                const deleteCards = cards.filter((c) => c._id !== card._id);
                setCards(deleteCards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }

    React.useEffect(() => {
        api.getCards()
            .then((cards) => {
            setCards(cards);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__cover">
                    <div className="avatar profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})` }} />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button className="button button_edit profile__button opacity" type="button" onClick={onEditProfile} />
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button className="button button_add opacity" type="button" onClick={onAddPlace} />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                    {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;