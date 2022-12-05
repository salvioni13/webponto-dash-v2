import React, { useEffect, useLayoutEffect } from 'react';
import logo from './logo.svg';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { ProtectedAdmin } from './routes/ProtectedAdmin';
import { PublicLayout } from './routes/PublicLayout';
import UsersDashboard from './pages/Users/UsersDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { ProtectedUser } from './routes/ProtectedUser';
import { useAppDispatch, useAppSelector } from './hooks';
import { changeLayoutMode } from './redux/layout/layoutSlicer';
import './main.css';


function App() {
  const dispatch = useAppDispatch();
  const {Layout: { viewMode }} = useAppSelector((state)=> ({Layout: state.Layout}))

  const theme = localStorage.theme;
  useEffect(()=>{
    if(!viewMode)
    dispatch(changeLayoutMode(theme ? theme : "dark"))
  },[viewMode, dispatch]);

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="" element={<Login />} />
      </Route>        

      <Route path="/user" element={<ProtectedUser />}>
        <Route path="" element={<UsersDashboard />} />
      </Route>

      <Route path="/admin" element={<ProtectedAdmin />}>
        <Route path="" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
