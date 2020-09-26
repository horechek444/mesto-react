import React from "react";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const EditProfilePopup =({isOpen, onClose, onUpdateUser}) => {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const handleInputNameChange = React.useCallback((event) => {
        setName(event.target.value);
    }, []);

    const handleInputAboutChange = React.useCallback((event) => {
        setDescription(event.target.value);
    }, []);

    const handleSubmit = React.useCallback((event) => {
        event.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }, [name, description, onUpdateUser]);

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser])

    return (
        <PopupWithForm title={'Редактировать профиль'} name={'edit'} isOpen={isOpen} onClose={onClose}
                       onSubmit={handleSubmit}>
            <div className="popup__cover">
                <label className="popup__control">
                    <input className="popup__input popup__input_type_name" type="text" name="name" value={name}
                           onChange={handleInputNameChange} placeholder="Имя" minLength="2" maxLength="20"
                           pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required/>
                    <span className="popup__error"/>
                </label>
                <label className="popup__control">
                    <input className="popup__input popup__input_type_about" type="text" name="about" value={description}
                           onChange={handleInputAboutChange} placeholder="Занятие" minLength="2" maxLength="200"
                           pattern="^[A-Za-zА-Яа-яЁё\s\D]+$" required/>
                    <span className="popup__error"/>
                </label>
            </div>
            <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить"
                   name="submit"/>
        </PopupWithForm>
    )
}

export default EditProfilePopup;