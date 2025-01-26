/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-chatbot-kit/build/main.css";
import HomePage from "./Pages/Home/home";
import AboutUs from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Projects from "./Pages/Projects/projects";
import Services from "./Pages/Services/services";
import Layout from "./Components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service/webDevelopment",
        element: <Services />,
      },
      {
        path: "/service/mobileDevelopment",
        element: <Services />,
      },
      {
        path: "/service/branding",
        element: <Services />,
      },
      {
        path: "/service/graphicDesigning",
        element: <Services />,
      },
      {
        path: "/service/seo",
        element: <Services />,
      },
      {
        path: "/service/Ecommerce",
        element: <Services />,
      },
      {
        path: "/service/uiux",
        element: <Services />,
      },
      {
        path: "/service/dataScience",
        element: <Services />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
