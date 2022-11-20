import React from 'react';
import logo from './logo.svg';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from './pages/Login/Login';
import { ProtectedAdmin } from './routes/ProtectedAdmin';
import { PublicLayout } from './routes/PublicLayout';
import UsersDashboard from './pages/Users/UsersDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { ProtectedUser } from './routes/ProtectedUser';



function App() {
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
