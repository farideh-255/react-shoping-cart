
import './App.css';
import SideBar from './components/sidebar/SideBar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/admin/home';
import RoutesComp from './routes/index.js';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

          <RoutesComp />
         
    </BrowserRouter>
  );
}

export default App;
