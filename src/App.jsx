import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './component/Navbar';
import { AuthContext } from './context';
import RouterApp from './pages/RouterApp';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
    })
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <BrowserRouter>
                <Navbar />
                <RouterApp />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
