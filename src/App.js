import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';
import SearchBus from './components/SearchBus';

function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <AddBus/>
      <ViewAll/>
      <SearchBus/>
    </div>
  );
}

export default App;
