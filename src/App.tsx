import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Awards from "./pages/Awards";
import CommercialSuccess from "./pages/CommercialSuccess";
import Contact from "./pages/Contact";
import GlobalEngagement from "./pages/GlobalEngagement";
import Home from "./pages/Home";
import LeadingRole from "./pages/LeadingRole";
import News from "./pages/News";
import PressDetails from "./pages/PressDetails";

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

          <Route path="/press-releases/:id" element={<PressDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
