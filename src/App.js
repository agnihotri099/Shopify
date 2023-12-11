import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import MyOrder from './pages/MyOrder';
import Order from './pages/Order';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder';
import ProductDetails from './pages/ProductDetails';
import ProfileScreen from './pages/ProfileScreen';
import Register from './pages/Register';
import ShippingSreen from './pages/ShippingSreen';

const App = () => {
  return (
    <>
    <Router>
      <Header/>
    <main>
      <Container>
        <br />
        <h1 className='text-center my-3' style={{fontSize:'48px',fontWeight:'700', letterSpacing:'1.5px'}}>ShoppieShop</h1>
        <br />
        <br />
        <Routes>
       <Route path="/"  element = {<Home/>} exact/>
       <Route path="/products/:id" element= {<ProductDetails/>} />
       <Route path="/cart/:id" element= {<Cart/>} />
       <Route path="/cart" element= {<Cart/>} />
       <Route path="/profile" element= {<ProfileScreen/>} />
       <Route path="/myorders" element= {<MyOrder/>} />
       <Route path="/login" element= {<Login/>} />
       <Route path="/login/shipping" element= {<ShippingSreen/>} />
       <Route path="/register" element= {<Register/>} />
       <Route path="/shipping" element= {<ShippingSreen/>} />
       <Route path="/payment" element= {<Payment/>} />
       <Route path="/placeorder" element= {<PlaceOrder/>} />
       <Route path="/order/:id" element= {<Order/>} />
       </Routes>
      </Container>
      </main>
      <hr />
      <Footer/>
      <br />
      </Router>
    </>
  )
}

export default App