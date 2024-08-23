import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Shop from './Pages/Shop';
import Shopcategroy from './Pages/Shopcategroy';
import Product from './Pages/Product';
import Loginsignup from './Pages/Loginsignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import menbanner from './Assets/banner_mens.png';
import womenbanner from './Assets/banner_women.png';
import kidbanner from './Assets/banner_kids.png';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Shop' element={<Shop/>} />
          <Route path='/men' element={<Shopcategroy banner={menbanner} category="men" />} />
          <Route path='/women' element={<Shopcategroy banner={womenbanner} category="women" />} />
          <Route path='/kids' element={<Shopcategroy banner={kidbanner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} /> 
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Loginsignup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
