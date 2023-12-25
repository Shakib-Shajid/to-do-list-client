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
import PrivateRoute from './PrivateRoute';
import PreviousTask from '../dashboard/PreviousTask'
import CreateNewTask from '../dashboard/CreateNewTask'
import UpdateTask from '../dashboard/UpdateTask'

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
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // {
            //     path: '/dashboard',
            //     element: <PreviousTask></PreviousTask>
            // },
            {
                path: '/dashboard/createNewTasks',
                element: <CreateNewTask></CreateNewTask>
            },
            {
                path: '/dashboard/updateTask/:id',
                element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
                loader: ({ params }) => fetch(`https://to-do-list-server-pi.vercel.app/taskOne/${params.id}`)
            },
        ]
    }
]);

export default router;