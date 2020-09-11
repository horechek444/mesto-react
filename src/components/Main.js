import React from "react";

function Main(props) {
    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__cover">
                    <div className="avatar profile__avatar" onClick={props.onEditAvatar} />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title" />
                            <button className="button button_edit profile__button opacity" type="button" onClick={props.onEditProfile} />
                        </div>
                        <p className="profile__subtitle" />
                    </div>
                </div>
                <button className="button button_add opacity" type="button" onClick={props.onAddPlace} />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;