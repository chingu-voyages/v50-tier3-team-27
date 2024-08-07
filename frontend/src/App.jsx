import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Results from './pages/Results/Results';
import PlantDetails from './pages/PlantDetails';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;