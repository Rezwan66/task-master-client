import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../layouts/Dashboard';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import AddTask from '../pages/Dashboard/AddTask';
import Todo from '../pages/Dashboard/Todo';
import ForWhom from '../pages/ForWhom';
import Faq from '../pages/Faq';

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
        path: '/forWhom',
        element: <ForWhom></ForWhom>,
      },
      {
        path: '/faq',
        element: <Faq></Faq>,
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
        path: 'profile',
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: 'addTask',
        element: <AddTask></AddTask>,
      },
      {
        path: 'todo',
        element: <Todo></Todo>,
      },
    ],
  },
]);

export default Router;
