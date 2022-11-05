class MovieApi{
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

    getMovies(){
        return fetch(`${this._baseUrl}`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            }
        ).then(res => this._checkResponse(res));
    }

}

const movieApi = new MovieApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default movieApi;