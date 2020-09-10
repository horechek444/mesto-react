import React from "react";

function Main() {
    const handleEditAvatarClick = () => {
        const avatarPopup = document.querySelector('.popup_type_avatar');
        avatarPopup.classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        const editPopup = document.querySelector('.popup_type_edit');
        editPopup.classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        const addPopup = document.querySelector('.popup_type_add');
        addPopup.classList.add('popup_opened');
    }
    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__cover">
                    <div className="avatar profile__avatar" onClick={handleEditAvatarClick} />
                    <div className="profile__info">
                        <div className="profile__position">
                            <h1 className="profile__title" />
                            <button className="button button_edit profile__button opacity" type="button" onClick={handleEditProfileClick} />
                        </div>
                        <p className="profile__subtitle" />
                    </div>
                </div>
                <button className="button button_add opacity" type="button" onClick={handleAddPlaceClick} />
            </section>

            <section className="pictures">
                <ul className="pictures__list">
                </ul>
            </section>
        </main>
    );
}

export default Main;