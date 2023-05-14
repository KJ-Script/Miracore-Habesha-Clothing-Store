import React from "react";
import Footer from "../pages/Footer";
import BestDeals from "./BestDeals";
import Home from "./Home";
import ImmediateLandingPage from "./ImmediateLandingPage";
import Collection from "../components/Collection";

function LandingPage() {
  return (
    <div className="">
      <ImmediateLandingPage/>
      <div className="hidden md:flex">
      <Home />
      </div>
      <BestDeals />
      <div className="hidden md:flex">
      <Collection />
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
