import React from "react";

function ImagePopup() {
    return (
        <section className="popup popup_type_picture">
            <div className="popup__container popup__container_type_picture">
                <button className="button popup__close opacity" type="button" />
                <figure className="popup__figure">
                    <img className="popup__image" src="#" alt="" />
                    <figcaption className="popup__caption" />
                </figure>
            </div>
        </section>
    );
}

export default ImagePopup;