import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import DashboardLayout from './components/layout/DashboardLayout'
import ErrorPage from './components/layout/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    // 	{
    // 		element: <ProtectedRoute />,
    // 		children: [
    // 			{
    // 				path: "/",
    // 				element: <MainLayout />,
    // 			},
    // 		],
    // 	},
    // ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'login',
    element: <h2>Login Layout</h2>,
    errorElement: <ErrorPage />,
  },
])
