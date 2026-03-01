import BentoBox from "../components/BentoBox.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faCreditCard, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api";

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const data = sessionStorage.getItem('bookingData');
        if (!data) {
            navigate('/browse');
            return;
        }
        setBookingData(JSON.parse(data));
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!paymentMethod) {
            alert("Please select a payment method");
            return;
        }

        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            alert("Please login to continue");
            navigate('/login');
            return;
        }

        setLoading(true);
        try {

            const response = await api.post('/bookings', {
                groundId: bookingData.groundId,
                userId: user.userId,
                bookingDate: bookingData.bookingDate,
                startTime: bookingData.startTime,
                endTime: bookingData.endTime
            });

            alert(`Booking successful! Booking ID: ${response.data.bookingId}`);
            sessionStorage.removeItem('bookingData');
            navigate('/dashboard');
        } catch (error) {
            alert(error.response?.data || "Booking failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!bookingData) return null;

    return (
        <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
            <div className="flex justify-center items-center p-5" >
                <BentoBox className="bg-white/10 rounded-xl gap-4 w-full max-w-2/4">
                    <form onSubmit={handleSubmit} className="p-6">
                        <h1 className="text-3xl font-bold text-lime-400 text-center pb-5">Order Summary</h1>
                        <div className="bg-black/10 p-6 rounded-xl">
                            <div className="flex justify-between py-2 border-b border-gray-50/10">
                                <p>Booking Type</p>
                                <p>Turf Booking</p>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-50/10">
                                <p>Venue</p>
                                <p>Ground {bookingData.groundId}</p>
                            </div>
                            <div className="flex justify-between py-2 border-b border-gray-50/10">
                                <p>Date and Time</p>
                                <p>{bookingData.bookingDate} | {bookingData.timeRange}</p>
                            </div>
                            <div className="flex justify-between ">
                                <p className="text-lime-400 text-xl pt-3 font-bold">Total Amount</p>
                                <p className="text-lime-400 text-xl pt-3 font-bold">₹{bookingData.price}</p>
                            </div>
                        </div>
                        <h1 className="text-xl font-medium text-lime-400  p-5">Select Payment Method</h1>
                        <div className="flex flex-col gap-4">
                            <div onClick={() => setPaymentMethod("upi")}
                                className={`flex items-center bg-black/20 p-5 rounded-xl w-full border  transition cursor-pointer
                                ${paymentMethod === "upi"
                                ? "border-lime-400 bg-lime-400/10 scale-105"
                                : "border-lime-400/40 hover:border-lime-400 hover:scale-105"
                            }`}
                            >
                                <FontAwesomeIcon icon={faMobileScreen} className="text-xl bg-white/10 p-2 mr-2 rounded-lg"/>
                                <p>UPI / QR Code</p>
                            </div>
                            <div onClick={() => setPaymentMethod("card")}
                                className={`flex items-center bg-black/20 p-5 rounded-xl w-full border  transition cursor-pointer
                                ${paymentMethod === "card"
                                ? "border-lime-400 bg-lime-400/10 scale-105"
                                : "border-lime-400/40 hover:border-lime-400 hover:scale-105"
                            }`}>
                                <FontAwesomeIcon icon={faCreditCard} className="text-xl bg-white/10 p-2 mr-2 rounded-lg"/>
                                <p>Credit / Debit</p>
                            </div>
                            <div onClick={() => setPaymentMethod("netbanking")}
                                className={`flex items-center bg-black/20 p-5 rounded-xl w-full border  transition cursor-pointer
                                ${paymentMethod === "netbanking"
                                ? "border-lime-400 bg-lime-400/10 scale-105"
                                : "border-lime-400/40 hover:border-lime-400 hover:scale-105"
                            }`}>
                                <FontAwesomeIcon icon={faBuildingColumns} className="text-xl bg-white/10 p-2 mr-2 rounded-lg"/>
                                <p>Net Banking</p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-6 py-3 bg-lime-400 text-green-900 rounded-3xl font-bold hover:scale-105 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {loading ? "Processing..." : "Proceed to Payment"}
                        </button>

                    </form>
                </BentoBox>
            </div>
        </div>
    )
}
export default Checkout;