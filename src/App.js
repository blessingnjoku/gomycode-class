
import './App.css';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Add from './pages/Admin/Add';
import PersonalDetails from './pages/PersonalDetails';
import Edit from './pages/Admin/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-user' element={<Add/>}/>
        <Route path='/:id' element={<PersonalDetails/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>

      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
