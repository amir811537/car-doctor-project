import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Home/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Mainlayout></Mainlayout>,
      children:[{


        path: '/',
        element:<Home></Home>
      },
      {
    path:"/about",
    element:<About></About>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: "/blog",
        element:<Blog></Blog>
      },
      {
        path: '/Contact',
        element:<Contact></Contact>
      },
      {
path: '/login',
element: <Login></Login>
      },
      {
path:"/register",
element:<Register></Register>

      }
    
    
    ]
    },
  ]);
  export default router;
  