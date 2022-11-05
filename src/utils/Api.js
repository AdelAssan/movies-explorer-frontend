
class Api {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    get _headers() {
        return {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
        }
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'Get',
            headers: this._headers
        }).then(this._checkResponse);

    }

    editProfile({name, email}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
            })
        }).then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`,
        {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-type': 'application/json',
                Accept: 'application/json',
            }
        }).then(res => this._checkResponse(res));
    }

    postMovieMark(movie){
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
                'Content-type': 'application/json',
                 Accept: 'application/json',
            },
            body: JSON.stringify(
               movie
            )
        }).then(this._checkResponse);
    }

    deleteMovieMark(id){
        return fetch(`${this._baseUrl}/movies/${id}`,{
          method: 'DELETE',
          headers:{
              authorization: `Bearer ${localStorage.getItem('jwt')}`,
              'Content-type': 'application/json',
              Accept: 'application/json',
          }
        }).then(this._checkResponse);
    }
}

const api = new Api({
    baseUrl: 'https://api.adelassan.diplom.nomoredomains.sbs',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default api;