import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import ErrorPage from '../components/ErrorPage';
import Guideline from '../components/Guideline';
import Contact from '../components/Contact';
import Login from '../components/Login';
import Home from '../components/Home';
import Register from '../components/Register';
import Dashboard from '../components/Dashboard';
import AddTask from '../components/AddTask';
// import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Guideline',
                element: <Guideline></Guideline>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            }
        ]
    },
]);

export default router;