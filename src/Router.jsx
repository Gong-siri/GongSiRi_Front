import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { authContext } from './context/AuthProvider';
import Layout from './components/common/Layout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Todo from './pages/Todo';
import Realty from './pages/Realty';
import Main from './pages/Main';
import PropertyUpdate from './pages/PropertyUpdate';
const Router = () => {
  const {
    state: { token },
  } = useContext(authContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            exact
            element={token ? <Navigate to="/main" replace /> : <SignIn />}
          />
          <Route
            path="/signin"
            element={token ? <Navigate to="/main" replace /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={token ? <Navigate to="/main" replace /> : <SignUp />}
          />
          <Route
            path="/todo"
            element={token ? <Todo /> : <Navigate to="/signin" replace />}
          />
          <Route
            path="/realty"
            element={token ? <Realty /> : <Navigate to="/signin" replace />}
          />
          <Route
            path="/main"
            element={token ? <Main /> : <Navigate to="/signin" replace />}
          />
          $
          <Route
            path="/detail/:id"
            element={
              token ? <PropertyUpdate /> : <Navigate to="/signin" replace />
            }
          />
          <Route
            path="*"
            element={token ? <Realty /> : <Navigate to="/signin" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
