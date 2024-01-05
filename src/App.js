import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/navbar';
import Cart from './pages/cart/cart';
import Shop from './pages/shop/shop';
import { ShopCnotaxtProvider } from './context/shopContext';
import Well from './component/well';

function App() {
  return (
      <div className='App'>
        <ShopCnotaxtProvider>
        <Router>
          <Nav />
          <Well />
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
        </ShopCnotaxtProvider>
      </div>
    );
}

export default App;
