import React, { createContext, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Spinner from "./components/body/Spinner";
import Error404 from "./components/error/error404";

const Home = lazy(() => import("./components/Index"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Team = lazy(() => import("./components/body/Team"));
const Services = lazy(() => import("./components/services/Services"));
const MeanStack = lazy(() => import("./components/services/MeanStack"));

export const shareContext = createContext();

function App() {
  return (
    <shareContext.Provider>
      <Router>
        <Header />
        <Suspense
          fallback={
            <div>
              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/mean" element={<MeanStack />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </shareContext.Provider>
  );
}

export default App;
