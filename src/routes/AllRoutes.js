/* eslint-disable import/prefer-default-export */

import { Route, Routes } from 'react-router-dom';
import {
  Home, Login, Register, Reserved, BookDetail, PageNotFound, ReserveForm,
} from '../pages';

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home title="Home" />} />
    <Route path="/reserved" element={<Reserved title="Reserved" />} />
    <Route path="/reserveform" element={<ReserveForm title="Reserve|Book" />} />
    <Route path="/login" element={<Login title="Login" />} />
    <Route path="/register" element={<Register title="Register" />} />
    <Route path="/book/:id" element={<BookDetail />} />
    <Route path="*" element={<PageNotFound title="Page Not Found" />} />

  </Routes>
);
