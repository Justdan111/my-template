import { createBrowserRouter, RouteObject } from 'react-router-dom';




export type RouteWithMeta = RouteObject & {
   
    path: string;
    children?: RouteWithMeta[];
    title?: string;
    wrapper?: string;
  }
  

  const routes: RouteWithMeta[] = [
    {
      path: '/',
      element: <></>,
      title: "Home Page",
      wrapper: "public",
    },
    {
      path: '/login',
      element: <></>,
      title: "Login Page",
      wrapper: "public",
    },
   
   
    {
      path: '*',
      element: <div>404 - Page Not Found</div>
    },
  
  
  
  ];
  
  const router = createBrowserRouter(routes);
  
  export default router;