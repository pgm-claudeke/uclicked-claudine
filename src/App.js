import './App.css';
import { Route, Routes } from 'react-router-dom';

import { PROJECTROUTES, ROUTES } from './constants/routes';
import { Home, Portfolio, Contact, Tqg, Jollibee, Busted, MarbleRun } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio/>}/>

          <Route path={PROJECTROUTES.TQG3D} element={<Tqg/>}/>
          <Route path={PROJECTROUTES.BUSTED3D} element={<Busted/>}/>
          <Route path={PROJECTROUTES.MARBLERUN3D} element={<MarbleRun/>}/>

          <Route path={PROJECTROUTES.JOLLIBEEWEB} element={<Jollibee/>}/>

          <Route path={PROJECTROUTES.TEATIME} element={<Jollibee/>}/>

          <Route path={ROUTES.CONTACT} element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
