import Popup from "../../Popup/Popup";

export default function NewCard({ isOpen, onClose, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Nuevo lugar">
      <form className="popup__container" 
      name="newcard-form" 
      onSubmit={handleSubmit} 
      noValidate>
        <input
          type="text"
          className="popup__input"
          placeholder="Título"
          name="name"
          required
          minLength="2"
          maxLength="30"
        />
        <span className="error" id="popup__input-title-error"></span>

        <input
          type="url"
          className="popup__input"
          placeholder="Enlace a la imagen"
          name="link"
          required
        />
        <span className="error" id="popup__input-imgurl-error"></span>

        <div className="popup__container-button">
          <span className="popup__error-message" id="add-card-error"></span>
          <button type="submit" className="popup__container-save popup__button">
            Guardar
          </button>
        </div>
      </form>
    </Popup>
  );
}