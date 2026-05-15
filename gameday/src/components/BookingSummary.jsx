import { useNavigate } from "react-router-dom";

const BookingSummary = ({ date, slot, price, groundId }) => {
    const navigate = useNavigate();

    if (!date || !slot) {
        return (
            <div className="bg-green-900/60 p-6 rounded-xl mt-6">
                <p>Select a date and time slot</p>
            </div>
        );
    }

    const handleProceed = () => {
        const bookingData = {
            groundId,
            bookingDate: date.toISOString().split("T")[0],
            startTime: slot.startTime,
            endTime: slot.endTime,
            timeRange: slot.timeRange,
            price
        };
        sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
        navigate('/checkout');
    };

    return (
        <>
            <div className={`bg-green-900/60 p-6 rounded-xl mt-6 transition-all duration-300
  ${date && slot ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <h3 className="text-xl font-bold mb-3">Booking Summary</h3>
                <p>
                    <b>Date:</b>{" "}
                    {date.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
                <p>
                    <b>Time:</b> {slot.timeRange}
                </p>
                <p>
                    <b>Price:</b> ₹{price}
                </p>

                <button
                    onClick={handleProceed}
                    disabled={!slot}
                    className="w-full mt-4 bg-lime-400 text-green-900 py-3 rounded-xl font-bold hover:scale-105 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
            <div className="fixed bottom-0 left-0 right-0 md:hidden bg-green-900 border-t border-white/10 p-4 flex justify-between items-center z-50">
                <div>
                    <p className="text-lime-400 font-bold">₹{price ?? "—"}</p>
                    <p className="text-xs text-gray-400">{slot?.timeRange || "No slot selected"}</p>
                </div>
                <button
                    onClick={handleProceed}
                    disabled={!date || !slot}
                    className="bg-lime-400 text-green-900 px-6 py-2 rounded-xl font-bold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    Next →
                </button>
            </div>
        </>
    );
};

export default BookingSummary;
