import React from "react";

function Main() {
    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__cover">
                    <div className="avatar profile__avatar" />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title" />
                            <button className="button button_edit profile__button opacity" type="button" />
                        </div>
                        <p className="profile__subtitle" />
                    </div>
                </div>
                <button className="button button_add opacity" type="button" />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;