import React from "react";

const PopupWithForm = ({name, isOpen, onClose, title, children, onSubmit}) => {
    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget && isOpen) {
            onClose();
        }
    };

    return (
        <section className={`${isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`}`} onMouseUp={handleOverlayClose}>
            <div className="popup__container">
                <button className="button popup__close opacity" type="button" onClick={onClose}/>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form form_type_${name}`} action="#" name={`${name}`} onSubmit={onSubmit}
                      noValidate>
                    {children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;