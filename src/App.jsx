import Globalstyle from './GlobalStyle';
import AuthProvider from './context/AuthProvider';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <AuthProvider>
      <Router />
      {/* <Globalstyle /> */}
    </AuthProvider>
  );
};

export default App;
