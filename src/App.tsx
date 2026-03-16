import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Solution from './pages/Solution';
import HowItWorks from './pages/HowItWorks';
import Market from './pages/Market';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/market" element={<Market />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
