import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import SharedProductLayout from './pages/SharedProductLayout';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=':productId' element={<SingleProduct />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser} />} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
