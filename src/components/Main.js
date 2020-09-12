import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();

    React.useEffect(() => {
    api.getUserInfo()
        .then((userInfo) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
        })
        .catch((err) => {
            console.log(`${err}`);
        });
    }, [])

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCards()
            .then((items) => {
                setCards(items);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, [])

    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__cover">
                    <div className="avatar profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }} />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title">{userName}</h1>
                            <button className="button button_edit profile__button opacity" type="button" onClick={props.onEditProfile} />
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                </div>
                <button className="button button_add opacity" type="button" onClick={props.onAddPlace} />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                    {cards.map((card) => <Card name={card.name} link={card.link} likes={card.likes} id={card._id}/>)}
                </ul>
            </section>
        </main>
    );
}

export default Main;