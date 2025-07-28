import { useState } from "react";

import defaultAvatar from "../../images/Avatar.png";
import EditProfile from "./components/form/EditProfile/EditProfile";
import EditAvatar from "./components/form/EditAvatar/EditAvatar";
import NewCard from "./components/form/NewCard/NewCard";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/ImagePopup";

// Tarjetas de ejemplo
const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

export default function Main() {
  const [activePopup, setActivePopup] = useState(null); // 'editProfile' | 'editAvatar' | 'addCard' | null
  const [selectedCard, setSelectedCard] = useState(null);

  // Abrir un popup específico
  function handleOpenPopup(popupType) {
    setActivePopup(popupType);
  }

  // Cerrar todos los popups
  function handleCloseAllPopups() {
    setActivePopup(null);
    setSelectedCard(null);
  }

  // Abrir el popup de imagen
  function handleImageClick(card) {
    setSelectedCard(card);
  }

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" onClick={() => handleOpenPopup('editAvatar')}>
            <img src={defaultAvatar} alt="Foto de perfil" className="profile__avatar" />
            <div className="profile__avatar-edit-icon"></div>
          </div>

          <div className="profile__info">
            <h1 className="profile__info-name">Fredy Alvarez</h1>
            <button
              className="profile__info-edit-button"
              type="button"
              onClick={() => handleOpenPopup('editProfile')}
            >
              <img
                src="https://img.icons8.com/ios-filled/50/FFFFFF/create-new.png"
                alt="edit button"
                className="profile__info-edit-button-img"
              />
            </button>
            <p className="profile__info-details">Estudiante</p>
          </div>

          <button
            className="profile__info-add-button"
            type="button"
            onClick={() => handleOpenPopup('addCard')}
          >
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/plus-math.png"
              alt="add button"
              className="profile__info-add-button-img"
            />
          </button>
        </section>

        <section className="gallery" id="galleryzone">
          {cards.map((card) => (
            <Card key={card._id} card={card} onImageClick={handleImageClick} />
          ))}
        </section>
      </main>

      {/* Popups */}
      <EditProfile
        isOpen={activePopup === 'editProfile'}
        onClose={handleCloseAllPopups}
      />
      <EditAvatar
        isOpen={activePopup === 'editAvatar'}
        onClose={handleCloseAllPopups}
      />
      <NewCard
        isOpen={activePopup === 'addCard'}
        onClose={handleCloseAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={handleCloseAllPopups}
      />
    </>
  );
}