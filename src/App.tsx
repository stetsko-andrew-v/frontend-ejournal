import React from 'react';
import useAuth from "./hooks/auth.hook";
import useRoutes from "./hooks/routes.hook";
import {BrowserRouter} from "react-router-dom";
import AuthContext from './context/AuthContext';
import Navbar from "./components/Navbar";

function App() {
    const { login, token, logout } = useAuth();

    const isAuthenticated = !!token;
    // const isAuthenticated = true;
    const routes = useRoutes(isAuthenticated);

    return (
        <>
            <AuthContext.Provider value={{
                token, login, isAuthenticated, logout
            }} >
                <BrowserRouter>
                    <Navbar/>
                    {routes}
                </BrowserRouter>
            </AuthContext.Provider>
        </>
    );
}

export default App;
