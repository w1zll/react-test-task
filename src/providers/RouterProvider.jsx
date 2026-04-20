import { createBrowserRouter } from 'react-router';
import CatalogPage from '../pages/catalog/CatalogPage';
import ProductPage from '../pages/product/ProductPage';
import CartPage from '../pages/cart/CartPage';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { element: <CatalogPage />, index: true },
      {
        path: '/product/:id',
        element: <ProductPage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);

export default router;
