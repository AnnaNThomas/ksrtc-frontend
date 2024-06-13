import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <Login/>
      <Register/>
      <AddBus/>
      <ViewAll/>
    </div>
  );
}

export default App;
