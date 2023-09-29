// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import ProtectedRoute from './ProtectedRoute';
import Notfound from './pages/Notfound';
import Signup from './pages/signup';
import Dashboard from "./pages/dashboard";
import Signin from './pages/signin';
import Signout from './pages/signout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin", // then we've added the signin route
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
      
    errorElement: <Navigate to="/signin" />
  },
  {
    path: "/signout",
    element: <Signout />,
  },
  {
    path: "*",
    element: <Notfound />,
    errorElement: <Navigate to="/signin" />
  },  
  

]);

function App() {
  return (

    <>

      {/* <Form />

      <ReactPlayground /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App
