/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Compare from './pages/Compare';
import TinyLiving from './pages/TinyLiving';
import Journal from './pages/Journal';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="compare" element={<Compare />} />
          <Route path="tiny-living" element={<TinyLiving />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
