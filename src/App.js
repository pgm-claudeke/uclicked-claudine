import './App.css';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import { Home, Portfolio, Contact, Videos, Webs, ThreeD, TwoD } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio/>}/>
          <Route Route path={ROUTES.VIDEO} element={<Videos/>}/>
          <Route Route path={ROUTES.WEB} element={<Webs/>}/>
          <Route Route path={ROUTES.THREE} element={<ThreeD/>}/>
          <Route Route path={ROUTES.TWO} element={<TwoD/>}/>
          <Route path={ROUTES.CONTACT} element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
