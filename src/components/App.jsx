import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { refreshUser } from 'redux/auth/operations';

import 'react-toastify/dist/ReactToastify.css';
import {  MainContainer } from "./App.styled";
import { useAuth } from '../hooks/useAuth';

import { Layout } from "./Layout";

const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));

export const App = () => {

    const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


    return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div>
        <MainContainer>

          <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<HomePage />} />
              <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />} />
               <Route path="/login" element={ <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} /> } />
               <Route path="/contacts" element={ <PrivateRoute redirectTo="/login" component={<ContactsPage />} /> } />
              </Route>
               <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
          
          
          </MainContainer>
             <ToastContainer/>
    </div>
  );
  
};