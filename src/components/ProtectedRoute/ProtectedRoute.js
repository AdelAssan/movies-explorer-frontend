import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, path, loggedIn }) => {
    return (
        <Route exact path={path}>
            {localStorage.getItem('jwt') ? children : <Redirect to="/"/>}
        </Route>
    )
}

export default ProtectedRoute;