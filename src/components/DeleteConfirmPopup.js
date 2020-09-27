import React from "react";
import PopupWithForm from "./PopupWithForm";

const DeleteConfirmPopup = ({card, onClose, isOpen, onCardDelete}) => {
    const handleSubmit = () => {
        onCardDelete(card);
        onClose();
    };

    return (
        <PopupWithForm title={'Вы уверены?'} name={'prevent'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <input className="button popup__submit" type="submit" value="Да" name="submit"/>
        </PopupWithForm>
    )
}

export default DeleteConfirmPopup;


