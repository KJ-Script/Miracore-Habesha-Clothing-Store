import React from "react";
import Footer from "../pages/Footer";
import BestDeals from "./BestDeals";
import Home from "./Home";

function LandingPage() {
  return (
    <div>
      <Home />
      <BestDeals />
      <Footer />
    </div>
  );
}

export default LandingPage;
