import React from "react";

function PopupWithForm(props) {
    return (
        <section className={`${props.isOpen ? `popup popup_type_${props.name} popup_opened` : `popup popup_type_${props.name}`}`}>
            <div className="popup__container">
                <button className="button popup__close opacity" type="button" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form form_type_${props.name}`} action="#" name={`${props.name}`} noValidate>
                    {props.children}
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;