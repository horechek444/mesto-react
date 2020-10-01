import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onAddPlace, isLoading}) => {
    const [isValid, setIsValid] = React.useState({name: false, link: false});
    const [inputValue, setInputValue] = React.useState({name: '', link: ''});
    const [validationMessage, setValidationMessage] = React.useState({name: '', link: ''});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInputValue({
            ...inputValue,
            [name]: value
        });

        setIsValid({
            ...isValid,
            [name]: event.target.validity.valid
        });

        setValidationMessage({
            ...validationMessage,
            [name]: event.target.validationMessage
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddPlace({
            name: inputValue.name,
            link: inputValue.link
        });
    }

    React.useEffect(() => {
        setInputValue({name: '', link: ''});
        setIsValid({name: false, link: false});
        setValidationMessage({name: '', link: ''});
    }, [isOpen]);

    return (
        <PopupWithForm title={'Новое место'} name={'add'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <div className="popup__cover">
                <label className="popup__control">
                    <input
                        className={`${validationMessage.name ? `popup__input popup__input_type_title popup__input_type_error` : `popup__input popup__input_type_title`}`}
                        type="text" name="name" placeholder="Название" minLength="1" maxLength="30"
                        pattern="^[A-Za-zА-Яа-яЁё\s\D]+$"
                        required value={inputValue.name}
                        onChange={handleInputChange}/>
                    <span
                        className={`${isValid.name ? `popup__error` : `popup__error popup__error_type_active`}`}>{validationMessage.name}</span>
                </label>
                <label className="popup__control">
                    <input
                        className={`${validationMessage.link ? `popup__input popup__input_type_link popup__input_type_error` : `popup__input popup__input_type_link`}`}
                        type="url" name="link" placeholder="Ссылка на картинку" required value={inputValue.link}
                        onChange={handleInputChange}/>
                    <span
                        className={`${isValid.link ? `popup__error` : `popup__error popup__error_type_active`}`}>{validationMessage.link}</span>
                </label>
            </div>
            <input
                className={`${isValid.link && isValid.name ? `button popup__submit` : `button popup__submit popup__submit_type_disabled`}`}
                type="submit" value={`${isLoading ? `Сохранение...` : `Сохранить`}`}
                name="submit"/>
        </PopupWithForm>
    )
}

export default AddPlacePopup;