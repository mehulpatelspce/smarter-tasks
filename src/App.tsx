// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
// import TaskApp from './TaskApp';
import HomePage from './pages/HomePage';
import Notfound from './pages/Notfound';
import Signin from './pages/Signin';
import TaskDetailsPage from './pages/TaskDetailsPage';
import TaskListPage from './pages/TaskListPage';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
    errorElement: <Notfound />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
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
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />)
      },
    ]
  },
 
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
