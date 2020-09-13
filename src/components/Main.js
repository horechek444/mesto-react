import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then(([userInfo, cards]) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);

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
                    <div className="avatar profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="button button_edit profile__button opacity" type="button" onClick={onEditProfile} />
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="button button_add opacity" type="button" onClick={onAddPlace} />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                    {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;