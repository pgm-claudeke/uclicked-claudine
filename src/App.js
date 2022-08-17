import './App.css';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';

import BaseLayout from './layouts/BaseLayout';
import { Home, Portfolio, Contact } from './pages';

function App() {
  return (
    <Routes>
        <Route path={ROUTES.HOME} element={<Home/>}/>
        <Route path={ROUTES.PORTFOLIO} element={<Portfolio/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
    </Routes>
  );
}

export default App;
