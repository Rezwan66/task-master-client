import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AddTask from '../pages/AddTask';
import Todo from '../pages/Todo';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layouts/Dashboard';
import DashboardHome from '../pages/Dashboard/DashboardHome';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addTask',
        element: <AddTask></AddTask>,
      },
      {
        path: '/todo',
        element: <Todo></Todo>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/register',
    element: <Register></Register>,
  },
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <DashboardHome></DashboardHome>,
      },
    ],
  },
]);

export default Router;
