import Game from './../navigationPage/Game';
import MainPage from './../mainPage/MainPage';
import Login from './../navigationPage/Login';

export const privateRoutes = [
    { id: 1, path: '/game', element: <Game />, exact: true },
    { id: 2, path: '/posts', element: <MainPage />, exact: true },
]

export const publicRoutes = [
    { id: 1, path: '/login', element: <Login />, exact: true },
]