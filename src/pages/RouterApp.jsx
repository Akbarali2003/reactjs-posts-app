import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import { AuthContext } from '../context';
import { publicRoutes, privateRoutes } from './../router/Route';
function RouterApp() {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(route => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )) :
                publicRoutes.map(route => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                ))}
        </Routes>
    )
}

export default RouterApp