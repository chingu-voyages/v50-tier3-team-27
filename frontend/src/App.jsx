import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Results from './pages/Results/Results';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<LandingPage />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;