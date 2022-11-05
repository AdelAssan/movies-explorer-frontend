import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children, path, exact }) => {
    return (
        <Route exact path={path}>
            {loggedIn ? children : <Redirect to="/signin"/>}
        </Route>
    )
}

export default ProtectedRoute;