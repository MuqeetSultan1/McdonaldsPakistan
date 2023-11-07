import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import Ourcommunity from './pages/Ourcommunity.js';
import Ourhistory from './pages/Ourhistory.js';
import Contactus from './pages/Contactus.js';
import Privacypolicy from './pages/Privacypolicy.js';
import Termsandcondition from './pages/Termsandcondition.js';
import Breakfast from './pages/Breakfast.js';
import Beef from './pages/Beef.js';
import Chickenandfishproducts from './pages/Chickenandfishproducts.js';
import CrispyChicken from './pages/CrispyChicken';
import Wraps from './pages/Wraps';
import HappyMeals from './pages/HappyMeals';
import EVM from './pages/EVM';
import VM from './pages/VM';
import Desserts from './pages/Desserts';
import Beverages from './pages/Beverages';
import Mccafe from './pages/Mccafe';
import FAS from './pages/FAS'
import SingleProductPage from './pages/SingleProductPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Ourcommunity' element={<Ourcommunity/>}/>
        <Route path='/Ourhistory' element={<Ourhistory/>}/>
        <Route path='/Contactus' element={<Contactus/>}/>
        <Route path='/Privacypolicy' element={<Privacypolicy/>}/>
        <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
        <Route path='/Breakfast' element={<Breakfast/>}/>
        <Route path='/Beef' element={<Beef/>}/>
        <Route path='/Chickenandfishproducts' element={<Chickenandfishproducts/>}/>
        <Route path='/CrispyChicken' element={<CrispyChicken/>}/>
        <Route path='/Wraps' element={<Wraps/>}/>
        <Route path='/HappyMeals' element={<HappyMeals/>}/>
        <Route path='/EVM' element={<EVM/>}/>
        <Route path='/VM' element={<VM/>}/>
        <Route path='/Desserts' element={<Desserts/>}/>
        <Route path='/Beverages' element={<Beverages/>}/>
        <Route path='/Mccafe' element={<Mccafe/>}/>
        <Route path='/FAS' element={<FAS/>}/>
        <Route path='/SingleProductPage/:id' element={<SingleProductPage/>}/>
        <Route path='/CheckoutPage' element={<CheckoutPage/>}/>
        <Route path='/PaymentSuccessPage' element={<PaymentSuccessPage/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
