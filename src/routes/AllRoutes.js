/* eslint-disable import/prefer-default-export */

import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import {
  Home, Login, Register, Reserved, BookDetail, PageNotFound, ReserveForm, Books, AllFeaturedBooks,
} from '../pages';
import { BookCard } from '../components';

export const AllRoutes = () => (
  <Routes>
    <Route path="/" element={<Home title="Home" />} />
    <Route path="/books" element={<Books BookCard={BookCard} title="All Books" />} />
    <Route path="/featured" element={<AllFeaturedBooks BookCard={BookCard} title="Featured Books" />} />
    <Route path="/reserved" element={<Reserved title="Reserved" />} />
    <Route path="/reserveform" element={<ReserveForm title="Reserve|Book" />} />
    <Route path="/login" element={<Login title="Login" />} />
    <Route path="/register" element={<Register title="Register" />} />
    <Route path="/book/:id" element={<BookDetail />} />
    <Route path="*" element={<PageNotFound title="Page Not Found" />} />

  </Routes>
);
