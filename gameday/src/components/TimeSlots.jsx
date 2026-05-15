import { useEffect, useRef, useState } from "react";
import api from "../services/api";
const formatTime = (hour) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    let h = hour % 12 || 12;
    return `${h}:00 ${ampm}`;
};

const pad = (n) => String(n).padStart(2, "0");
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TimeSlots = ({ selectedDate, groundId, onSelect}) => {
    const sliderRef = useRef(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [openHour, setOpenHour] = useState(null);
    const [closeHour, setCloseHour] = useState(null);
    const [bookedTimes, setBookedTimes] = useState([]);
    const [closed, setClosed] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setSelectedHour(null);
    }, [selectedDate,groundId]);

    useEffect(() => {
        if(!groundId||!selectedDate) return;
        const dayName = DAYS[selectedDate.getDay()];
        setLoading(true);
        setClosed(false);

        api.get(`/grounds/${groundId}/hours?day=${dayName}`)
            .then(res => {
                setOpenHour(parseInt(res.data.openTime.split(":")[0]));
                setCloseHour(parseInt(res.data.closeTime.split(":")[0]));
            })
            .catch(()=>{
                setClosed(true);
                setOpenHour(null);
                setCloseHour(null);
            })
        .finally(()=>
            setLoading(false));
    }, [groundId, selectedDate]);

    useEffect(()=>{
        if(!groundId||!selectedDate) return;
        const dateStr = selectedDate.toISOString().split('T')[0];
        api.get(`/bookings/booked-slots?groundId=${groundId}&date=${dateStr}`)
            .then(res=>setBookedTimes(res.data.map(t=>t.substring(0,5))))
            .catch(()=>setBookedTimes([]));
    }, [groundId, selectedDate])
    const scroll = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === "next" ? 200 : -200,
            behavior: "smooth",
        });
    };

    if (!selectedDate) return null;
    if (loading) return (
        <div className="flex gap-4 px-14 mt-8">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="min-w-28 h-24 rounded-xl bg-white/10 animate-pulse" />
            ))}
        </div>
    );
    if(closed) return <p className="text-center text-gray-400">This ground is closed on this day.</p>;
    if(openHour===null)return null;

    const today = new Date();
    const isToday =
        selectedDate.toDateString() === today.toDateString();
    const currentHour = today.getHours();

    return (
        <div className="relative mt-8">
            <button
                onClick={() => scroll("prev")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-lime-400 text-green-900 w-10 h-10 rounded-full z-10 hover:scale-110 transition"
            >
                ❮
            </button>

            <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto px-14 scrollbar-hide"
            >
                {Array.from({length: closeHour-openHour},(_,i)=>openHour+i).map(hour => {
                    if (isToday && hour <= currentHour) return null;

                    const startStr = `${pad(hour)}:00` ;
                    const endStr = `${pad(hour + 1)}:00`;
                    const isBooked = bookedTimes.includes(startStr);
                    const selected = selectedHour === hour;

                    return (
                        <div
                            key={hour}
                            onClick={() => {
                                if (isBooked) return;
                                setSelectedHour(hour);
                                onSelect({
                                    startTime: startStr,
                                    endTime: endStr,
                                    timeRange: `${formatTime(hour)} - ${formatTime(hour + 1)}`,
                                });
                            }}
                            className={`min-w-28 p-4 rounded-xl transition cursor-pointer
                            ${
                                isBooked
                                    ? "bg-red-900/40 text-red-400 cursor-not-allowed"
                                    : selected ? "bg-lime-400  text-green-900 shadow-xl" 
                                        : "bg-white/10 hover:bg-lime-400/30"
                            }`}
                        >
                            <div className="flex flex-col gap-2">
                                <span className={`font-semibold
                                ${
                                    isBooked
                                        ? "text-red-400"
                                        : selected
                                            ? "text-green-900"
                                            : "text-lime-400"
                                }`}
                                >{formatTime(hour)}</span>
                                <span className="text-sm opacity-80">{formatTime(hour + 1)}</span>
                                <span className="text-xs font-bold">
                  {isBooked ? "Booked" : "Available"}
                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            <button
                onClick={() => scroll("next")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-lime-400 text-green-900 w-10 h-10 rounded-full z-10 hover:scale-110 transition"
            >
                ❯
            </button>
        </div>
    );
};

export default TimeSlots;
