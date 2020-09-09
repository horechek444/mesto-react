import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <body className="page">
      <div className="page__cover">
        <Header />
        <Main />
        <Footer />

        <section className="popup popup_type_edit">
          <div className="popup__container">
            <button className="button popup__close opacity" type="button" />
            <h2 className="popup__title">Редактировать профиль</h2>
            <form className="popup__form form_type_edit" action="#" name="redact" noValidate>
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
            </form>
          </div>
        </section>

        <section className="popup popup_type_add">
          <div className="popup__container">
            <button className="button popup__close opacity" type="button" />
            <h2 className="popup__title">Новое место</h2>
            <form className="popup__form form_type_add" action="#" name="new-place" noValidate>
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
            </form>
          </div>
        </section>

        <section className="popup popup_type_picture">
          <div className="popup__container popup__container_type_picture">
            <button className="button popup__close opacity" type="button" />
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="" />
                <figcaption className="popup__caption" />
            </figure>
          </div>
        </section>

        <section className="popup popup_type_prevent">
          <div className="popup__container">
            <button className="button popup__close opacity" type="button" />
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="popup__form form_type_prevent" action="#" name="prevent-form" noValidate>
              <input className="button popup__submit" type="submit" value="Да" name="submit" />
            </form>
          </div>
        </section>

        <section className="popup popup_type_avatar">
          <div className="popup__container">
            <button className="button popup__close opacity" type="button" />
            <h2 className="popup__title">Обновить аватар</h2>
            <form className="popup__form form_type_avatar" action="#" name="avatar-form" noValidate>
              <div className="popup__cover popup__cover_type_avatar">
                <label className="popup__control">
                  <input className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                    <span className="popup__error" />
                </label>
              </div>
              <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить" name="submit" />
            </form>
          </div>
        </section>
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
      </body>
  );
}

export default App;
