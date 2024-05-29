import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { BurgerMenu } from './components/AppBar/Menu/BurgerMenu'

const items = ['Агентсво', 'Услуги' , 'Кейсы', 'Блог','Контакты']
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
    children: []
  },
  {
    path:'/burger',
    element:(
      <BurgerMenu items={items}/>
    )
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
