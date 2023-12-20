import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import AddTask from '../pages/AddTask';
import Todo from '../pages/Todo';
import ErrorPage from '../pages/ErrorPage';

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
]);

export default Router;
