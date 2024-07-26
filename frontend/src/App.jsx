import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { LandingPage } from './pages/landingPage';
import { Navbar } from './NavBar'
import { Outlet } from 'react-router'

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
          <Route path='/' element={<LandingPage />} />
          </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
