export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Método privado reutilizable para manejar la respuesta
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Obtener información del usuario
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers
    }).then(this._handleResponse);
  }

  // Actualizar información del usuario
  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about })
    }).then(this._handleResponse);
  }

  // Actualizar avatar
  setAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar })
    }).then(this._handleResponse);
  }

  // Agregar una nueva tarjeta
  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link })
    }).then(this._handleResponse);
  }
  // Obtener todas las tarjetas
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers
    }).then(this._handleResponse);
  }

  // Dar like a una tarjeta
  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers
    }).then(this._handleResponse);
  }

  // Quitar like
  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers
    }).then(this._handleResponse);
  }

  changeLikeCardStatus(cardId, like) {
  if (like) {
    return this.likeCard(cardId);
  } else {
    return this.unlikeCard(cardId);
  }
}
  

  // Eliminar card
 deleteCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers
  })
  .then(this._handleResponse);
}
}
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "7bf7e307-aa24-4e15-8d22-ca1a8ba6fdbe",
    "Content-Type": "application/json"
  }
});

export default api;