// import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from '../src/pages/home-pages';
import ProductPage from '../src/pages/product-pages';
import NavBar from './components/nav-bar/nav-bar';
import ProductPageDetail from './pages/product-pages-detail';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CartPage from './pages/cart-pages'
import React from "react";
import SignupPage from './pages/signup-pages'
import LoginPage from './pages/login-pages'
// import { ToastContainer } from 'react-toastify';
export const AppContext = React.createContext();
// const initialState ={
//   products: [],
//   product: null,
//   cart: []
// };
function App() {

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPageDetail />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </Provider>
  );
}

export default App;
