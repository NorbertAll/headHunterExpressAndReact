import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import ChangePassword from './Components/Autorization/ChangePassword';
import ForgotPassword from './Components/Autorization/ForgotPassword';
import Login from './Components/Autorization/Login';
import Registration from './Components/Autorization/Registration';
import PanelAdmina from './Components/PanelAdmin/PanelAdmina';
import PanelHr from './Components/PanelHr/PanelHr';
import PanelStudent from './Components/PanelStudent/PanelStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/register/:userId/:registerToken"
          element={<Registration />}
        />
        <Route
          path={'/login'}
          element={<Login />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          path="/change-password/:userId"
          element={<ChangePassword />}
        />
        <Route
          path="/change-password/:userId"
          element={<ChangePassword />}
        />
        <Route
          path="/change-password/:userId"
          element={<PanelAdmina />}
        />
        <Route
          path="/change-password/:userId"
          element={<PanelStudent />}
        />
        <Route
          path="/change-password/:userId"
          element={<PanelHr />}
        />
        
      </Routes>
    
      </header>
    </div>
  );
}

export default App;
