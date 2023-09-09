 import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import HomePage from './pages/HomePage';
import Notfound from './pages/Notfound';
import Signin from './pages/Signin';
import TaskDetailsPage from './pages/TaskDetailsPage';
import TaskListPage from './pages/TaskListPage';

const router = createBrowserRouter([
      {
        path: "/",
        element: <Navigate to="/signin" />,
        errorElement: <Notfound />,
      },
      {
        path: "/signin",
        element: <Signin />,
        errorElement: <Notfound />,
      },
      {
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/home",
            element: <HomePage />,
            errorElement: <Notfound />,
          },
          {
            path: "/tasks",
            element: <TaskListPage />,
            errorElement: <Notfound />,
          },
          {
            path: "/tasks/:id",
            element: <TaskDetailsPage />,
            errorElement: <Notfound />,
          },
        ],
      }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
