import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
          exact={true}
        ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
    </AuthWrapper>
  )
}

export default App;