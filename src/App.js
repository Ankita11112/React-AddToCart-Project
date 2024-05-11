import './App.css';
import Header from './Components/Header';
import { Routes , Route} from  'react-router-dom'
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
