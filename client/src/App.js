import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import About from "./pages/About";
import EventsPromotion from "./pages/EventsPromotion";
import Services from "./pages/Services";
import PrimeMen from "./pages/PrimeMen";
import PrimeSpa from "./pages/PrimeSpa";
import Products from "./pages/Products";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import ProductsContent from "./pages/admin/ProductsContent";
import HomeContent from "./pages/admin/HomeContent";
import AboutContent from "./pages/admin/AboutContent";
import ServicesContent from "./pages/admin/ServicesContent";
import PrimemenContent from "./pages/admin/PrimemenContent";
import EventsPromotionContent from "./pages/admin/EventsPromotionContent";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  toast.configure({
    autoClose: 5000,
    draggable: false,
  });

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/eventsandpromo" component={EventsPromotion} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/primemen" component={PrimeMen} exact />
          {/* <Route path="/primespa" component={PrimeSpa} exact /> */}
          <Route path="/products" component={Products} exact />

          {/* Dashboard Routing */}
          <Route path="/login" component={Login} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/products-content" component={ProductsContent} exact />
          <Route path="/home-content" component={HomeContent} exact />
          <Route path="/about-content" component={AboutContent} exact />
          <Route path="/services-content" component={ServicesContent} exact />
          <Route path="/primemen-content" component={PrimemenContent} exact />
          <Route
            path="/eventsandpromo-content"
            component={EventsPromotionContent}
            exact
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
