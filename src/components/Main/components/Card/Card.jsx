import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onImageClick, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { name, link, owner, isLiked } = card;

  const isOwn = owner === currentUser?._id;
  const liked = !!isLiked;

  const cardLikeButtonClassName = `gallery__card-like-button ${
    liked ? "gallery__card-like-button_is-active" : ""
  }`;

  return (
    <div className="gallery__card">
      {isOwn && (
        <button
          className="gallery__card-button-delete"
          aria-label="Eliminar tarjeta"
          type="button"
          onClick={() => onCardDelete(card)}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/trash--v1.png"
            alt="Eliminar"
          />
        </button>
      )}

      <img
        src={link}
        alt={name}
        className="gallery__card-picture"
        onClick={() => onImageClick(card)}
      />

      <div className="gallery__card-content">
        <p className="gallery__card-content-text">{name}</p>

        <button
          className={cardLikeButtonClassName}
          aria-label="Like"
          type="button"
          onClick={() => onCardLike(card)}
        >
          <img
            src={
              liked
                ? "https://img.icons8.com/ios-filled/50/like--v1.png"
                : "https://img.icons8.com/ios/50/like--v1.png"
            }
            alt={liked ? "Ya te gusta" : "Me gusta"}
            className="gallery__card-like-picture"
          />
        </button>
      </div>
    </div>
  );
}
