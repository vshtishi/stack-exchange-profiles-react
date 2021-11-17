import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}
          exact={true}>
        </Route>
        <Route path="/login" element={<Login />}
        >
        </Route>
      </Routes>

    </Router>
  );
}

export default App;