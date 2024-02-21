import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import ProtectedRoute from './ProtectedRoute';
import Register from '../pages/Register';
import Login from '../pages/Login';
import NavPanel from '../components/NavPanel';
import CreateBooks from '../components/CreateBooks';
import DeleteBook from '../components/DeleteBook';
import Home from '../pages/Home';

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: '/service',
      element: <div>Service Page</div>,
    },
    {
      path: '/about-us',
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: '/',
      element: (
        <>
          <NavPanel />
          <ProtectedRoute />
        </>
      ), // Wrap the component in ProtectedRoute
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/create-book',
          element: <CreateBooks />,
        },
        {
          path: '/delete-book',
          element: <DeleteBook />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: '/',
      element: <Register />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;