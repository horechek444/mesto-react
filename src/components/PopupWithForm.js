import React from "react";

function PopupWithForm({ name, isOpen, onClose, title, children, onSubmit }) {
    return (
        <section className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`}>
            <div className="popup__container">
                <button className="button popup__close opacity" type="button" onClick={onClose}/>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form form_type_${name}`} action="#" name={`${name}`} onSubmit={onSubmit} noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;