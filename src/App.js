import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ROUTES from './constants/routes';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import SurveyListContainer from './components/Home/SurveyListContainer';
import SurveyContainer from './components/Survey/Output/Container';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route exact path={'/'} element={<Navigate to={ROUTES.HOME} />} />
            <Route path={ROUTES.HOME} element={<SurveyListContainer />} />
            <Route path={ROUTES.SURVEY} element={<SurveyContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
