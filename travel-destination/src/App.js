import './App.css';
import Home from './components/home/Home'
import TourDetails from './components/TourDetails/TourDetails'
import Data from './data/db.json';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home data={Data} />} />
        <Route path="/city/:id" element={<TourDetails data={Data} />} />
      </Routes>

    </>
  );
}