import React from "react";
import {Switch, Route, useHistory, Redirect} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/Auth";
import api from "../../utils/Api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {DURATION_NUMBER} from "../../constants/constants";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isRegError, setRegError] = React.useState(false);
    const [isLoginError, setIsLoginError] = React.useState(false);
    const [isChangeProfile, setIsChangeProfile] = React.useState(false);
    const [isChangeError, setIsChangeError] = React.useState(false);
    const [savedMovie, setSavedMovie] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const history = useHistory();

    const handleRegister = (name, email, password) => {
        auth.register(name, email, password)
            .then((data) => {
                if(data){
                    handleLogin(email, password);
                    setCurrentUser(data);
                }
            })
            .catch((error) => {
                console.log(error);
                setRegError(true);
            });
    }

    const handleLogin = (email, password) => {
        auth.authorize(email, password)
            .then((data) => {
                setLoggedIn(true);
                localStorage.setItem('jwt', data.token);
                tokenCheck();
                history.push('/movies');
            }).catch((error) => {
            console.log(error);
            setIsLoginError(true);
        })
    }

    const handleProfileChange = (name, email) => {
        api.editProfile({name, email})
            .then((res) => {
                setCurrentUser(res);
                setIsChangeProfile(true);
                setIsChangeError(false);
                setTimeout(() => {
                    setIsChangeProfile(false);
                }, 2000);
            }).catch((error) => {
           console.log(error);
           setIsChangeProfile(false);
            setIsChangeError(true);
            setTimeout(() => {
                setIsChangeError(false);
            }, 3000);
        });

    }

    const tokenCheck = () => {
        const token = localStorage.getItem('jwt');
        if (token) {
            auth.getContent()
                .then((res) => {
                        setCurrentUser(res);
                        //console.log(res);
                        setLoggedIn(true);
                        localStorage.setItem('currentUser', JSON.stringify(res));
                }).catch(error => {
                    console.log(error);
                });
        }
    }

    React.useEffect(() => {
        tokenCheck();
    }, []);

    /*React.useEffect(() => {
        if (loggedIn) {
            history.push('/movies');
        }
        history.push('/');
    }, [loggedIn]);*/

    const handleSignOut = () => {
        //localStorage.removeItem('jwt');
        //localStorage.removeItem('currentUser');
        setLoggedIn(false);
        setCurrentUser({});
        history.push('/');
        localStorage.clear();
    }

    React.useEffect(() => {
        setIsLoading(true);
        if (localStorage.getItem('jwt')) {
            api.getSavedMovies()
                .then((res) => {
                    const findSavedMovies = res?.filter((i) => i.owner._id === currentUser._id);
                    setSavedMovie(findSavedMovies);
                    //history.push('/movies');
                    console.log(findSavedMovies);
                }).catch((err) => console.log(err)).finally(()=>{setIsLoading(false)})
        }
    }, [localStorage.getItem('jwt')]);

    const saveMovieHandler = (movie) => {
        api.postMovieMark(movie)
            .then((res) => {
                const updatedSavedMovies = [...savedMovie, { ...res, id: res.movieId }];
                setSavedMovie(updatedSavedMovies);
                console.log(savedMovie);
            }).catch((err) => {console.log(err);
                if(err === 'Ошибка 401'){
                    handleSignOut();
                }
            });
    }

    function deleteMovieMarkHandler(movie) {
        api.deleteMovieMark(movie._id)
            .then(() => {
                const updatedSavedMovies = savedMovie.filter(c => c._id !== movie._id);
                setSavedMovie(updatedSavedMovies);
            })
            .catch((err) => console.log(err));
    }

    const filterHandler = (allMovies, renderedMovies, checkbox) => {
        return allMovies.filter((check) => {
            if (checkbox === true) {
                return check.nameRU.toLowerCase().includes(renderedMovies.toLowerCase()) && check.duration <= DURATION_NUMBER;
            }
            if (checkbox === false) {
                return check.nameRU.toLowerCase().includes(renderedMovies.toLowerCase());
            }
        });
    }

    return (
      <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
     <Header loggedIn={loggedIn} />
        <Switch>
        <Route exact path="/">
      <Main/>
        </Route>
        <ProtectedRoute exact path="/movies" loggedIn={loggedIn}>
            <Movies  onFilter={filterHandler} onSave={saveMovieHandler} savedMovie={savedMovie} onDelete={deleteMovieMarkHandler} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/saved-movies" loggedIn={loggedIn} >
            <SavedMovies  savedMovie={savedMovie} onFilter={filterHandler} isLoading={isLoading} onDelete={deleteMovieMarkHandler} />
        </ProtectedRoute>
        <ProtectedRoute exact path="/profile" loggedIn={loggedIn} >
            <Profile onSignOut={handleSignOut} handleProfileChange={handleProfileChange} currentUser={currentUser}
                     isChangeProfile={isChangeProfile} isChangeError={isChangeError} />
        </ProtectedRoute>
        <Route exact path="/signin">
            <Login handleLogin={handleLogin} isLoginError={isLoginError} />
        </Route>
        <Route exact path="/signup">
            <Register handleRegister={handleRegister} isRegError={isRegError} />
        </Route>
        <Route exact path="*">
            <Error/>
        </Route>
        <Route>
                {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
                    </Route>
        </Switch>
      <Footer/>
    </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
