import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
            setCurrentUser(userInfo);
        })
    }, [])

    const handleEditAvatarClick = React.useCallback(() => {
        setEditAvatarPopupOpen(true);
    });

    const handleEditProfileClick = React.useCallback(() => {
        setEditProfilePopupOpen(true);
    });

    const handleAddPlaceClick = React.useCallback(() => {
        setAddPlacePopupOpen(true);
    });

    const handleCardClick = React.useCallback((card) => {
        setSelectedCard(card);
    });

    const closeAllPopups = React.useCallback(() => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(false);
    });

    const handleUpdateUser = React.useCallback(() => {
        api.setUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
            console.log(`${err}`);
        });
    });

  return (
      <div className="page">
          <div className="page__cover">
              <CurrentUserContext.Provider value={currentUser}>
                  <Header />
                  <Main
                      onEditAvatar={handleEditAvatarClick}
                      onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onCardClick={handleCardClick} />
                  <Footer />

                  <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

                  <PopupWithForm title={'Новое место'} name={'add'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                      <div className="popup__cover">
                          <label className="popup__control">
                              <input className="popup__input popup__input_type_title" type="text" name="name" placeholder="Название" minLength="1" maxLength="30" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                              <span className="popup__error" />
                          </label>
                          <label className="popup__control">
                              <input className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required />
                              <span className="popup__error" />
                          </label>
                      </div>
                      <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить" name="submit" />
                  </PopupWithForm>

                  <PopupWithForm title={'Вы уверены?'} name={'prevent'}>
                      <input className="button popup__submit" type="submit" value="Да" name="submit" />
                  </PopupWithForm>

                  <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

                  <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
              </CurrentUserContext.Provider>
          </div>
      </div>
  );
}

export default App;
