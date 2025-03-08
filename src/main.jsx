import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import BikeDetailsPage from './components/RentBikesPage.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: (
      <App />),
    children: [{ path: "/", element: <Home /> },
    { path: "/bike", element: <BikeDetailsPage /> },
    { path: "/contact", element: <Contact /> }]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
