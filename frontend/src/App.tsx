import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConcertList from './components/ConcertList';
import AddConcert from './components/AddConcert';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<ConcertList />} />
          <Route path="/add-concert" element={<AddConcert />} />
        </Routes>
      </div>
    </Router>
  );
}
