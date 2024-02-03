import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css';
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import { Provider } from 'react-redux';
import EcommStore from './store/index.js';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from './components/Login.jsx';
import RegisterPage from './components/Register.jsx';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/bag", element:< Bag />}
    ],
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"/register",
    element:<RegisterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={EcommStore}>
      <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>,
)
