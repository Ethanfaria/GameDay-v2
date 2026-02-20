import { useEffect, useRef, useState } from "react";

const formatTime = (hour) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    let h = hour % 12 || 12;
    return `${h}:00 ${ampm}`;
};

const TimeSlots = ({ selectedDate, bookedSlots = {}, onSelect }) => {
    const sliderRef = useRef(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    useEffect(() => {
        setSelectedSlot(null);
    }, [selectedDate]);

    const scroll = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === "next" ? 200 : -200,
            behavior: "smooth",
        });
    };

    if (!selectedDate) return null;

    const startHour = 6;
    const endHour = 22;
    const dateKey = selectedDate.toISOString().split("T")[0];
    const booked = bookedSlots[dateKey] || [];

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
                {[...Array(endHour - startHour)].map((_, i) => {
                    const hour = startHour + i;

                    if (isToday && hour <= currentHour) return null;

                    const start = formatTime(hour);
                    const end = formatTime(hour + 1);
                    const range = `${start} - ${end}`;
                    const isBooked = booked.includes(range);
                    const selected = selectedSlot === range;

                    return (
                        <div
                            key={range}
                            onClick={() => {
                                if (isBooked) return;
                                setSelectedSlot(range);
                                onSelect(range);
                            }}
                            className={`min-w-28 p-4 rounded-xl transition cursor-pointer
                            ${
                                isBooked
                                    ? "bg-red-900/40 text-red-400 cursor-not-allowed"
                                    : selected
                                        ? "bg-lime-400  text-green-900 shadow-xl"
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
                                >{start}</span>
                                <span className="text-sm opacity-80">{end}</span>
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
