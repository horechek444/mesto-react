import React from "react";

const ImagePopup = ({card, onClose}) => {
    const handleOverlayClose = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <section className={card ? "popup popup_type_picture popup_opened" : "popup popup_type_picture"} onMouseUp={handleOverlayClose}>
            <div className="popup__container popup__container_type_picture">
                <button className="button popup__close opacity" type="button" onClick={onClose}/>
                <figure className="popup__figure">
                    <img className="popup__image" src={card.link} alt={card.name}/>
                    <figcaption className="popup__caption">{card.name}</figcaption>
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;