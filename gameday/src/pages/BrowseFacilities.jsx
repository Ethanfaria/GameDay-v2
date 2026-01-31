import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import api from "../services/api";

const BrowseFacilities = () => {
    const navigate = useNavigate();
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    ;

    useEffect(() => {
        api.get("/facilities")
            .then(res => setFacilities(res.data))
            .catch(err => setError("Failed to load facilities"))
            .finally(() => setLoading(false));
    }, []);


    return (
        <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
            <NavBar />

            {loading && <p>Loading facilities...</p>}
            {error && <p className="text-red-400">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {facilities.map((facility) => (
                    <ListingCard
                        key={facility.facilityId}
                        image={facility.imageUrl}
                        name={facility.name}
                        location={facility.location}
                        price={facility.startingPrice}
                        priceSuffix="/ hour"
                        onClick={() =>
                            navigate(`/facilities/${facility.facilityId}`)
                        }
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default BrowseFacilities;
