import { createBrowserRouter } from "react-router";
import Books from "../pages/books/Books";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/errorpage/Errorpage";
import BookDetails from "../pages/bookDetails/BookDetails";
import Dashboard from "../pages/dashboard/Dashboard";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true,
        element: <Homepage></Homepage>,
      },
      {
        path:"/books",
        element:<Books></Books>,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => {
          return fetch("/booksData.json").then(res=>res.json())
        },
        element:<BookDetails></BookDetails>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      }

    ],
    errorElement: <Errorpage></Errorpage>,
  },

]);
