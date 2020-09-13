import React from "react";

function ImagePopup(props) {
    return (
        <section className={`${props.card ? "popup popup_type_picture popup_opened" : "popup popup_type_picture"}`}>
            <div className="popup__container popup__container_type_picture">
                <button className="button popup__close opacity" type="button" onClick={props.onClose} />
                <figure className="popup__figure">
                    <img className="popup__image" src={props.card} alt="" />
                    <figcaption className="popup__caption" />
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;