import { useEffect, useRef, useState } from "react";

const DateSlider = ({ onSelect }) => {
    const sliderRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const today = new Date();
        const days = [];

        for (let i = 0; i < 14; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);
            days.push(d);
        }

        setDates(days);
        onSelect(days[0]);
    }, []);

    const scroll = (dir) => {
        sliderRef.current.scrollBy({
            left: dir === "next" ? 300 : -300,
            behavior: "smooth",
        });
    };

    const selectDate = (date, index) => {
        setSelectedIndex(index);
        onSelect(date);
    };

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
                className="flex gap-4 overflow-x-auto px-14 scrollbar-hide scroll-smooth"
            >
                {dates.map((date, i) => {
                    const selected = i === selectedIndex;

                    return (
                        <div
                            key={i}
                            onClick={() => selectDate(date, i)}
                            className={`min-w-[120px] h-[120px] flex flex-col items-center justify-center rounded-xl cursor-pointer transition
              ${
                                selected
                                    ? "bg-lime-400 text-green-900 shadow-xl"
                                    : "bg-white/10 hover:bg-white/20"
                            }`}
                        >
              <span className="uppercase text-sm">
                {date.toLocaleDateString("en-US", { weekday: "short" })}
              </span>
                            <span className="text-3xl font-bold">
                {date.getDate()}
              </span>
                            <span className="uppercase text-sm">
                {date.toLocaleDateString("en-US", { month: "short" })}
              </span>
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

export default DateSlider;
