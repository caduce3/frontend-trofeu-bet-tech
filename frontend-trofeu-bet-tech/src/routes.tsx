import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { AuthLayout } from './pages/_layouts/auth'
import { SignUp } from './pages/auth/sign-up'
import { Players } from './pages/app/players/players'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {path: '/dashboard', element: <Dashboard />},
            {path: '/players', element: <Players />}
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {path: '/sign-in', element: <SignIn />},
            {path: '/sign-up', element: <SignUp />}
        ]
    },

])