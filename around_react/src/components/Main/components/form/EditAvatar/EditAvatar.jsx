import Popup from "../../Popup/Popup";

export default function EditAvatar({ isOpen, onClose, onSubmit }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} title="Cambiar foto de perfil">
      <form
        className="popup__container"
        name="avatar-form"
        onSubmit={onSubmit}
      >
        <input
          type="url"
          className="popup__input"
          placeholder="URL de tu avatar"
          name="avatar"
          required
        />
        <fieldset className="popup__container-button">
          <button type="submit" className="popup__container-save popup__button">
            Guardar
          </button>
        </fieldset>
      </form>
    </Popup>
  );
}