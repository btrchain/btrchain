import React, { createContext, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Spinner from "./components/body/Spinner";
import Error404 from "./components/error/error404";
const Home = lazy(() => import("./components/Index"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Team = lazy(() => import("./components/body/Team"));

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/team" component={Team} />
            {/* <Route exact path="/sitemap" component={Sitemap} /> */}
            <Route component={Error404} />
          </Switch>
        </Suspense>
        <Footer />
        
      </Router>
    </shareContext.Provider>
  );
}

export default App;