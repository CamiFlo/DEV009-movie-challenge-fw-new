import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
///*import Root from "./routes/root";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

//<RouterProvider router={router} />






/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/
