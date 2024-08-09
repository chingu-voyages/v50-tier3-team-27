import { Route, Routes } from 'react-router-dom';
import { Outlet } from 'react-router';
import './App.css';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Results from './pages/Results/Results';
import PlantDetails from './pages/PlantDetails';
import Footer from './components/Footer'
import ViewAllPlants from './pages/viewAll/ViewAllPlants';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route index element={<LandingPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/viewAll" element={<ViewAllPlants />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;