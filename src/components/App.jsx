import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.error("Error al cargar datos:", err));
  }, []);

  function handleOpenPopup(popupType) {
    setActivePopup(popupType);
  }

  function handleClosePopup() {
    setActivePopup(null);
  }

  // Actualiza usuario y cierra popup
  const handleUpdateUser = (data) => {
    api.setUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  // Actualiza avatar y cierra popup
  const handleUpdateAvatar = ({ avatar }) => {
    api.setAvatar({ avatar })
      .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  };

  // Maneja nuevo lugar agregado
  const handleAddPlaceSubmit = ({ name, link }) => {
    api.addCard({ name, link })
      .then(newCard => {
        setCards(cards => [newCard, ...cards]);
        handleClosePopup();
      })
      .catch(err => console.error("Error al agregar tarjeta:", err));
  };

  // Maneja "like" en tarjeta usando directamente card.isLiked
  const handleCardLike = (card) => {
    const isLiked = !!card.isLiked; // true o false según API

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(updatedCard => {
        setCards(cards => cards.map(c => c._id === card._id ? updatedCard : c));
      })
      .catch(err => console.error("Error al actualizar like:", err));
  };

  // Maneja eliminación de tarjeta
  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter(c => c._id !== card._id));
      })
      .catch(err => console.error("Error al eliminar tarjeta:", err));
  };

  if (!currentUser) return <div className="loading">Cargando...</div>;

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          activePopup={activePopup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
