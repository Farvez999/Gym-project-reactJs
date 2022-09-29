import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qus from './components/Qus/Qus';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Qus></Qus>
    </div>
  );
}

export default App;
