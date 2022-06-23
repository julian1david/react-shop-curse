//react router dom nos permite movernos entre paginas
  //BrowserRouter: idintifica la navegacion que hacemos (adelante o atras)
  //Routes: nos permite tener una estructura de control
  //Route: identifica la ruta, donde estoy y donde me voy a mover
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//importamos react: usamos el shoortcut (rafce)
import React from 'react';
import Login from '../containers/login';
import Layout from '../containers/Layout';
//importamos nuestros archivos de scss:
import '../styles/global.css';
import RecoveryPassword from '../containers/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
          //con Route vamos a decir como va a trabajar la ruta
          <Route path="/login" element={<Login />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          //Estructura necesaria dentro de 'Routes' valor que debe estar presente (default)
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;