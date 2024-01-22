import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {persistor, store} from './features/store'
import App from './App'
import Cart from './components/Cart'
import ItemsList from './components/ItemsList'
import DefaultScreen from './components/DefaultScreen'
import ItemInfo from './components/item/ItemInfo'
import { ALL_ITEM_ROUTE, CART_ROUTE, HOME_ROUTE, ITEM_BY_ID_ROUTE } from './utils/const'
import { PersistGate } from 'redux-persist/integration/react'

const rootView = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <App />,
    children: [
      {
        path: CART_ROUTE,
        element: <Cart />,
      },
      {
        path: ALL_ITEM_ROUTE,
        element: <ItemsList />,
      },
      { 
        index: true, 
        element: <DefaultScreen /> 
      },
      {
        path: ALL_ITEM_ROUTE + ITEM_BY_ID_ROUTE +':id',
        element: <ItemInfo/>      }
    ],
  },
]);

if (rootView) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </PersistGate>
    </Provider>,
      rootView
  )
}
