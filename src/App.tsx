import React from 'react';
import logo from './logo.svg';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { ProtectedLayout } from './routes/ProtectedLayout';
import { PublicLayout } from './routes/PublicLayout';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<ProtectedLayout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
