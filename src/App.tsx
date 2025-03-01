import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const CommercialSuccess = lazy(() => import("./pages/CommercialSuccess"));
const LeadingRole = lazy(() => import("./pages/LeadingRole"));
const Awards = lazy(() => import("./pages/Awards"));
const News = lazy(() => import("./pages/News"));
const GlobalEngagement = lazy(() => import("./pages/GlobalEngagement"));
const Contact = lazy(() => import("./pages/Contact"));
const PressDetails = lazy(() => import("./pages/PressDetails"));
const GlobalDetails = lazy(() => import("./pages/GlobalDetails"));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/commercial-success"
              element={
                <Suspense fallback={<Loading />}>
                  <CommercialSuccess />
                </Suspense>
              }
            />
            <Route
              path="/leading-role"
              element={
                <Suspense fallback={<Loading />}>
                  <LeadingRole />
                </Suspense>
              }
            />
            <Route
              path="/awards"
              element={
                <Suspense fallback={<Loading />}>
                  <Awards />
                </Suspense>
              }
            />
            <Route
              path="/news"
              element={
                <Suspense fallback={<Loading />}>
                  <News />
                </Suspense>
              }
            />
            <Route
              path="/global-engagement"
              element={
                <Suspense fallback={<Loading />}>
                  <GlobalEngagement />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loading />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/press-releases/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <PressDetails />
                </Suspense>
              }
            />
            <Route
              path="/global-presence/:id"
              element={
                <Suspense fallback={<Loading />}>
                  <GlobalDetails />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
