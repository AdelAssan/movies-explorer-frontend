import React from "react";
import {Redirect, Switch, Route, useHistory} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";


function App() {



  return (
    <div className="page">
     <Header/>
        <Switch>
        <Route exact path="/">
      <Main/>
        </Route>
        <Route exact path="/movies">
            <Movies/>
        </Route>
        <Route exact path="/saved-movies">
            <SavedMovies/>
        </Route>
        <Route exact path="/profile">
            <Profile/>
        </Route>
        <Route exact path="/signin">
            <Login/>
        </Route>
        <Route exact path="/signup">
            <Register/>
        </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
