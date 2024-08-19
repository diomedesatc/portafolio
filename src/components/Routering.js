import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Projects from './Projects';
import App from '../App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<App />} />
        <Route path='projects' element= {<Projects />} />
        </>
    )
);

const Routering = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routering
