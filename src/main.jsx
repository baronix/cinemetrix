import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RecomendacaoDeFilme from './components/RecomendacaoDeFilme.jsx'
import ViewGrid from './components/ViewGrid.jsx'
import ViewNoDetail from './components/ViewNoDetail.jsx';
import App from './App';
import SingleMovie from './components/SingleMovie.jsx';
import Error from './components/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      { 
      index: true, 
      element: <Navigate to="/list" replace /> 
      },
      {
      path: "/view",
      element: <ViewNoDetail/>
      },
      {
      path: "/grid",
      element: <ViewGrid/>
      },
      {
      path: "/list",
      element: <RecomendacaoDeFilme/>
      },
      {
      path: "/movie/:id",
      element: <SingleMovie/>
      },


    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
