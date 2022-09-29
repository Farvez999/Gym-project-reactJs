import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QandA from './components/Home/QandA/QandA';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <QandA></QandA>
    </div>
  );
}

export default App;
