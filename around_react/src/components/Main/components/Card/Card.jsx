// src/components/Main/components/Card/Card.jsx
export default function Card({ card, onImageClick  }) {
  const { name, link, isLiked } = card;

  // Ícono diferente si la tarjeta tiene like
  const likeIcon = isLiked
    ? "https://img.icons8.com/ios-filled/50/like--v1.png" // Ícono lleno
    : "https://img.icons8.com/ios/50/like--v1.png";        // Ícono vacío

    const handleClick = () => {
      onImageClick(card);
    };

  return (
    <div className="gallery__card">
      <button
        className="gallery__card-button-delete"
        aria-label="Delete card"
        type="button"
      >
        <img
          src="https://img.icons8.com/ios-glyphs/30/FFFFFF/trash--v1.png"
          alt="Eliminar"
        />
      </button>
      <img 
      src={link} 
      alt={name} 
      className="gallery__card-picture" 
      onClick={handleClick}
      />
      <div className="gallery__card-content">
        <p className="gallery__card-content-text">{name}</p>
        <button
          className="gallery__card-like-button"
          aria-label="Like card"
          type="button"
        >
          <img
            src={likeIcon}
            alt={isLiked ? "Ya te gusta" : "Me gusta"}
            className="gallery__card-like-picture"
          />
        </button>
      </div>
    </div>
  );
}