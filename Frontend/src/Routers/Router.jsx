import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Auth/Login'
import Feed from '../components/Feed/Feed'
import Profile from '../components/Profile/Profile'
import NotificationPage from '../components/Notification/NotificationPage'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children: [{
                path: '/',
                element: <Feed />
            },
            {
                path: '/profile/:id',
                element: <Profile />
            },
            {
                path: '/notify',
                element: <NotificationPage />
            }
            ]
        },
        {
            path: '/login',
            element: <Login />
        },
        {

        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Router
