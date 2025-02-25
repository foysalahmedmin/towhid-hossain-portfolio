import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CommercialSuccess from './pages/CommercialSuccess';
import LeadingRole from './pages/LeadingRole';
import Awards from './pages/Awards';
import News from './pages/News';
import GlobalEngagement from './pages/GlobalEngagement';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commercial-success" element={<CommercialSuccess />} />
          <Route path="/leading-role" element={<LeadingRole />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/news" element={<News />} />
          <Route path="/global-engagement" element={<GlobalEngagement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;