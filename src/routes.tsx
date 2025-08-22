import React from 'react';
import { Route } from 'react-router-dom';
// import { LoginPage, Register } from '../components/user';
import Marketplace from './components/marketplace/marketplace';

export default [
  <Route path="/" element={<Marketplace />}  />,
//   <Route path="/login" Component={LoginPage} />
];