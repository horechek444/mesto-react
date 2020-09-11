import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState();
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState();
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState();

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    }

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    }

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    }

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
    }

  return (
      <div className="page">
      <div className="page__cover">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick} />
            <Footer />

          <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
              <div className="popup__cover">
                  <label className="popup__control">
                      <input className="popup__input popup__input_type_name" type="text" name="name" minLength="2" maxLength="20" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                      <span className="popup__error" />
                  </label>
                  <label className="popup__control">
                      <input className="popup__input popup__input_type_about" type="text" name="about" minLength="2" maxLength="200" pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required />
                      <span className="popup__error" />
                  </label>
              </div>
              <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить" name="submit" />
          </PopupWithForm>

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

          <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <div className="popup__cover popup__cover_type_avatar">
                  <label className="popup__control">
                      <input className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                      <span className="popup__error" />
                  </label>
              </div>
              <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить" name="submit" />
          </PopupWithForm>
          <ImagePopup />
      </div>

      <template className="pictures-template">
        <li className="pictures__item">
          <button className="button pictures__delete opacity" type="button" />
          <img className="pictures__image" src="#" alt="" />
            <div className="pictures__cover">
              <p className="pictures__title" />
              <div className="pictures__like-cover">
                <button className="button pictures__like opacity" type="button" />
                <span className="pictures__like-counter" />
              </div>
            </div>
        </li>
      </template>
      </div>
  );
}

export default App;
