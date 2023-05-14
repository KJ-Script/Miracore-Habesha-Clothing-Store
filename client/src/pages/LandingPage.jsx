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
      <Home />
      <BestDeals />
      <Collection />
      <Footer />
    </div>
  );
}

export default LandingPage;
