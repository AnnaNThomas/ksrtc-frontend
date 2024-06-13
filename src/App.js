import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';
import SearchBus from './components/SearchBus';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Login/>}/> 
   <Route path='/Register' element={<Register/>}/> 
   <Route path='/AddBus' element={<AddBus/>}/> 
   <Route path='/SearchBus' element={<SearchBus/>}/> 
   <Route path='/ViewAll' element={<ViewAll/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
