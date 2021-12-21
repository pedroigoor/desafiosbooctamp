import './assets/styles/custom.scss';
import './App.css';
import NavBar from './components/NavBar';
import Home from './page/Home';
import Catalog from 'page/Catalog';

function App() {
  return (
    <div >
      <NavBar/>
      <Catalog></Catalog>
    </div>
  );
}

export default App;
