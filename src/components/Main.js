import React, {useEffect} from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    api.getUserInfo()
        .then((userInfo) => {
            setUserName(userInfo.name);
            setUserDescription(userInfo.about);
            setUserAvatar(userInfo.avatar);
        })
        .catch((err) => {
            console.log(`${err}`);
        });

    React.useEffect(() => {
        api.getCards()
            .then((results) => {
                setCards(results);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    }, [])
    console.log(cards);
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
                    {/*{cards.map(card => <Card link={card.link} name={card.name} likes={card.likes}/>)}*/}
                </ul>
            </section>
        </main>
    );
}

export default Main;