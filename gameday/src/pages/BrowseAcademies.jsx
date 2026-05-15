import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import api from "../services/api";

const BrowseAcademies = () => {
    const navigate = useNavigate();
    const [academies, setAcademies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/academies")
            .then(res => setAcademies(res.data))
            .catch(() => setError("Failed to load academies"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
            <NavBar />

            {loading && <p>Loading academies...</p>}
            {error && <p className="text-red-400">{error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                {academies.map((academy) => (
                    <ListingCard
                        key={academy.academyId}
                        image={academy.image_url}
                        name={academy.academyName}
                        location={`${academy.level} · ${academy.ageGroup}`}
                        price={academy.monthlyFee}
                        priceSuffix="/ month"
                        onClick={() => navigate(`/academies/${academy.academyId}`)}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default BrowseAcademies;