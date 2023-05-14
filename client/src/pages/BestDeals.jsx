import React from "react";
import bestdealImage1 from "../assets/images/LandingPage/bestdeal1.png";
import bestdealImage2 from "../assets/images/LandingPage/bestdeal2.png";
import bestdealImage3 from "../assets/images/LandingPage/bestdeal3.png";
import bestdealImage4 from "../assets/images/LandingPage/bestdeal4.png";
import ImageContainer from "../components/ImageContainer";

function BestDeals() {
  const description = 'One of a kind beautiful dress'
  return (
    <div className="min-h-screen w-full my-[2%]">
      <div className="w-full flex justify-center">
        <p className="text-[150%] font-bold">Best Deals</p>
      </div>

      <div className="md:flex space-x-4 md:mx-0 mx-4">
        <ImageContainer image={bestdealImage1} description={description} original={'550$'} newPrice={'450$'}/>
        <ImageContainer image={bestdealImage2} description={description} original={'550$'} newPrice={'450$'}/>
        <ImageContainer image={bestdealImage3} description={description} original={'550$'} newPrice={'450$'}/>
        <ImageContainer image={bestdealImage4} description={description} original={'550$'} newPrice={'450$'}/>
      </div>
      <div className="w-full flex justify-center my-4">
        <button className="px-8 py-4 bg-slate-800 text-white font-2xl font-bold">More</button>

      </div>
    </div>
  );
}

export default BestDeals;
