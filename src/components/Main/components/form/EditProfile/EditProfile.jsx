// src/components/main/components/form/EditProfile/EditProfile.jsx
import Popup from "../../Popup/Popup";

export default function EditProfile({ isOpen, onClose, onSubmit }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Editar perfil">
      <form className="popup__container" name="profile-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="popup__input"
          placeholder="Nombre"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <input
          type="text"
          className="popup__input"
          placeholder="Acerca de mí"
          name="about"
          required
          minLength="2"
          maxLength="200"
        />
        <div className="popup__container-button">
          <button type="submit" className="popup__container-save">
            Guardar
          </button>
        </div>
      </form>
    </Popup>
  );
}