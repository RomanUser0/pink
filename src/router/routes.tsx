import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Layout = lazy(() => import('./layout'))
const MainPage = lazy(() => import('../pages/mainPage/mainPage'))
const FormPage = lazy(() => import('../pages/formPage/formPage'))
const PhotoPage = lazy(() => import('../pages/photoPage/photoPage'))



export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout />, children: [
            { path: '/', element: <MainPage /> },
            { path: '/form', element: <FormPage /> },
            { path: '/photo', element: <PhotoPage /> },
          
        ]
    },

])