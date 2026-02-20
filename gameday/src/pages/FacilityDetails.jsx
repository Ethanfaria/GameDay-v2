import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import BentoBox from "../components/BentoBox";
import DateSlider from "../components/DateSlider";
import TimeSlots from "../components/TimeSlots";
import BookingSummary from "../components/BookingSummary";
import { useParams } from "react-router-dom"
import api from "../services/api";
import GroundSelector from "../components/GroundSelector"


const FacilityDetails = () => {
    const [facility, setFacility] = useState(null)
    const [grounds, setGrounds] = useState([])
    const [selectedGround, setSelectedGround] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Mock booked data (replace with backend API later)
    const bookedSlots = {
        "2026-02-01": ["6:00 AM - 7:00 AM", "8:00 PM - 9:00 PM"],
    };

    const { id } = useParams()

    useEffect(() => {
        api.get(`/facilities/${id}`).then(res => {
            setFacility(res.data)
            setGrounds(res.data.grounds || [])

            if (res.data.grounds?.length > 0) {
                setSelectedGround(res.data.grounds[0])
            }
        })
    }, [id])


    return (
        <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
            <NavBar />

            <BentoBox className="flex items-stretch flex-col md:flex-row mx-1 md:mx-20 bg-white/10 mt-6">
                <div className="flex-1">
                    <img
                        src={selectedGround?.imageUrl || facility?.imageUrl}
                        className="rounded-t-2xl md:rounded-l-2xl w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 p-6">
                    <h1 className="text-2xl md:text-3xl text-lime-400 font-bold mb-2">
                        {facility?.name}
                    </h1>

                    <p className="text-gray-400">
                        ₹{selectedGround?.hourlyPrice} per hour
                    </p>

                    <p className="text-gray-400">
                        Size: {selectedGround?.length}m × {selectedGround?.breadth}m
                    </p>
                    {grounds.length > 0 && (
                        <div className="mt-3 md:mt-6">
                            <GroundSelector
                                grounds={grounds}
                                selected={selectedGround}
                                onSelect={setSelectedGround}
                            />
                        </div>
                    )}
                </div>
            </BentoBox>
            <div className="mt-6 md:mx-20">
                <DateSlider onSelect={setSelectedDate} />

                <TimeSlots
                    selectedDate={selectedDate}
                    bookedSlots={bookedSlots}
                    onSelect={setSelectedSlot}
                />

                <BookingSummary
                    date={selectedDate}
                    slot={selectedSlot}
                    price={selectedGround?.hourlyPrice}
                />
            </div>

        </div>
    );
};

export default FacilityDetails;
