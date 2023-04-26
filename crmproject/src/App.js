import './App.css';
import Navbar from './Components/Home/Navbar';
import { Outlet } from 'react-router-dom';
import Navbartop from './Components/Home/Navbartop';

function App() {
  return (
    <div className="App">
      <Navbartop/>
      <div className='row'>
        <div className='col-3'>
        <Navbar/>
      <Outlet />
        </div>
        <div className='col-9 bgg'>
        
        </div>
      </div>
    </div>
  );
}

export default App;
