import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import DeleteConfirmPopup from "./DeleteConfirmPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const App = () => {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState([]);
    const [cards, setCards] = React.useState([]);

    const handleCardLike = (card) => {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        const promise = isLiked ? api.dislikeCard(card._id) : api.likeCard(card._id);
        promise
            .then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    };

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                const deleteCards = cards.filter((c) => c._id !== card._id);
                setCards(deleteCards);
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    };

    const loadCards = async () => {
        try {
            const cards = await api.getCards();
            setCards(cards);
        } catch (err) {
            console.log(`${err}`);
        }
    };

    const getUserInfo = async () => {
        try {
            const userInfo = await api.getUserInfo();
            setCurrentUser(userInfo);
        } catch (err) {
            console.log(`${err}`);
        }
    };

    React.useEffect(() => {
        loadCards();
    }, [])

    React.useEffect(() => {
        getUserInfo();
    }, [])

    const handleEditAvatarClick = () => {
        setEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setAddPlacePopupOpen(true);
    };

    const handleDeletePopupOpenClick = (card) => {
        setDeletePopupOpen(true);
        setSelectedCard(card);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const closeAllPopups = () => {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setDeletePopupOpen(false);
        setSelectedCard(false);
    };

    const handleUpdateUser = (userInfo) => {
        api.setUserInfo(userInfo)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    };

    const handleUpdateAvatar = (inputValue) => {
        api.setAvatar(inputValue)
            .then((avatar) => {
                setCurrentUser(avatar);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    };

    const handleEscapeClose = (event) => {
        if (event.key === 'Escape') {
            closeAllPopups()
        }
    };

    React.useEffect(() => {
        document.addEventListener("keydown", handleEscapeClose, false);

        return () => {
            document.removeEventListener("keydown", handleEscapeClose, false);
        };
    });


    const handleAddPlaceSubmit = (inputValue) => {
        api.createCard(inputValue)
            .then((newCard) => {
                setCards([...cards, newCard]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`${err}`);
            });
    };

    return (
        <div className="page">
            <div className="page__cover">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header/>
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleDeletePopupOpenClick}
                        cards={cards}
                    />
                    <Footer/>

                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}
                                      onUpdateUser={handleUpdateUser}/>

                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                                   onAddPlace={handleAddPlaceSubmit}/>

                    <DeleteConfirmPopup isOpen={isDeletePopupOpen} onClose={closeAllPopups}
                                        card={selectedCard} onCardDelete={handleCardDelete}/>

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                                     onUpdateAvatar={handleUpdateAvatar}/>

                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}

export default App;
