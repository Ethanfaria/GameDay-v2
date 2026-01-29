import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const BrowseGrounds = () => {
  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
      <NavBar />
      <ListingCard
        image={ground.imageUrl}
        name={ground.name}
        location={ground.location}
        price={ground.pricePerHour}
        priceSuffix="/ hour"
        onClick={() => navigate(`/grounds/${ground.id}`)}
      />
      <Footer />
    </div>
  );
};

export default BrowseGrounds;
