import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Login from './common/components/Login';
import Register from './common/components/Register';
import Detail from './common/components/Detail';
import Booking from './common/components/Booking';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login}></Route>
        <Route path='/logout' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
        <Route path='/book' Component={Booking}></Route>
       <Route path='/details' Component={Detail}></Route>
       <Route path="*" Component={Login}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
