import { useEffect } from "react";

export default function ImagePopup({ card, onClose }) {
  useEffect(() => {
    if (!card) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [card, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup")) {
      onClose();
    }
  };

  if (!card) return null;

  return (
    <div className="popup popup__opened" id="popup-image" onClick={handleOverlayClick}>
      <div className="popup__container popup__container-image">
        <button
          type="button"
          className="popup__button-closed"
          onClick={onClose}
          aria-label="Cerrar"
        >
          X
        </button>
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__caption">{card.name}</p>
      </div>
    </div>
  );
}