import {
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import React from "react";
import './index.css'
import { Router } from './Router/Router';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/Authprovider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <div className='max-w-screen-xl mx-auto'>
               <RouterProvider router={Router} />
            </div>
          </HelmetProvider>
       </QueryClientProvider>
     </AuthProvider>
</React.StrictMode>,
)
