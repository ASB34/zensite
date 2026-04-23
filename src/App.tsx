import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Compare from './pages/Compare';
import TinyLiving from './pages/TinyLiving';
import Journal from './pages/Journal';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPosts from './pages/admin/AdminPosts';
import AdminPages from './pages/admin/AdminPages';

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
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="posts" element={<AdminPosts />} />
          <Route path="pages" element={<AdminPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
