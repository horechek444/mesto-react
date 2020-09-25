import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateUser }) {
    return (
        <PopupWithForm title={'Обновить аватар'} name={'avatar'} isOpen={isOpen} onClose={onClose}>
            <div className="popup__cover popup__cover_type_avatar">
                <label className="popup__control">
                    <input className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
                    <span className="popup__error" />
                </label>
            </div>
            <input className="button popup__submit popup__submit_type_save" type="submit" value="Сохранить" name="submit" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup;