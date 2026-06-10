import React from 'react';
import Home from './components/Home';
import Content from './components/Content';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';


function App() {
  const router=createBrowserRouter([
    {
path:"/",
element:<Home />
    },
    {
path:"/:id",
element:<Content />
    }
  ]);
  return (
    <div className="container">
   <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App