import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFutbol,
  faLightbulb,
  faParking,
  faShower,
} from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BentoBox from "../components/BentoBox";

// Reusable BentoBox Component


const Landing = () => {
  const facilityList = [
    { icon: faFutbol, label: "Premium Turfs" },
    { icon: faShower, label: "Changing Rooms" },
    { icon: faParking, label: "Parking Space" },
    { icon: faLightbulb, label: "Flood Lights" },
  ];

  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6">
      <NavBar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {/* Hero */}
        <BentoBox className="col-span-full p-6 md:p-12 bg-black/20 text-center">
          <h1 className="text-lime-400 font-extrabold text-4xl md:text-7xl uppercase tracking-wide mb-7">
            From Click to Kick!
          </h1>
          <p className="text-lg md:text-xl font-extralight">
            Find and book the best futsal grounds near you with just a few
            clicks
          </p>
        </BentoBox>

        {/* Main Booking BentoBox */}
        <BentoBox className="md:col-span-2 md:row-span-2 p-6 md:p-10 bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)] bg-cover bg-center bg-no-repeat flex flex-col justify-end">
          <h2 className="font-bold mb-5 text-2xl md:text-3xl">
            Book Your Futsal Experience,
            <br />
            Anytime, Anywhere!
          </h2>
          <button className="px-7 py-3 bg-lime-400 text-green-950 font-bold rounded-full hover:bg-lime-300 transition self-start">
            Book Now
          </button>
        </BentoBox>

        {/* Stats */}
        <BentoBox className="md:col-span-2 p-6 md:p-10 flex items-center justify-center bg-lime-400/10">
          <div className="flex justify-around w-full">
            {[
              { num: "200+", label: "Grounds" },
              { num: "50K+", label: "Players" },
              { num: "100K+", label: "Bookings" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">
                  {stat.num}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </BentoBox>

        {/* Why Choose Us */}
        <BentoBox className="md:col-span-1 p-6 md:p-8 flex flex-col justify-center bg-white/3">
          <h3 className="text-lime-400 font-bold text-lg mb-4">
            Why Choose Us
          </h3>

          <ul className="text-white/90">
            {[
              "Instant booking confirmation",
              "Secure online payments",
              "Top-rated facilities",
              "24/7 customer support",
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2 mb-1">
                <span className="text-lime-400 font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </BentoBox>

        {/* Testimonial */}
        <BentoBox className="md:col-span-1 p-6 md:p-8 flex flex-col justify-center text-center bg-white/3">
          <p className="italic text-white/90 leading-relaxed mb-5">
            "GameDay has completely transformed how we book our weekly matches.
            No more phone calls or waiting for confirmations!"
          </p>

          <p className="font-bold text-lime-400">— Alex Chen, Regular Player</p>
        </BentoBox>

        {/* Referee Section */}
        <BentoBox className="md:col-span-2 md:row-span-2 py-8 md:py-10 px-6 md:px-20 flex flex-col justify-center bg-black/10">
          <h2 className="text-lime-400 font-bold text-2xl md:text-3xl">
            Whistle ready?
          </h2>
          <p className="py-5 text-sm md:text-base">
            Referees can now sign up and take charge of the game! Join our
            platform to get booked for matches, connect with teams, and
            officiate like a pro
          </p>
          <button className="px-8 py-3 bg-lime-400 text-green-950 font-bold rounded-full hover:bg-lime-300 transition self-start text-lg md:text-xl">
            Register Now
          </button>
        </BentoBox>

        {/* Facilities */}
        <BentoBox className="md:col-span-2 md:row-span-2 py-8 md:py-10 px-6 md:px-8 flex flex-col justify-center bg-white/5">
          <h2 className="text-lime-400 font-bold text-xl md:text-2xl mb-6">
            Top-Notch Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {facilityList.map((item, index) => (
              <div
                key={index}
                className="rounded-xl backdrop-blur-md bg-white/10 p-4 flex items-center gap-3 border border-white/5"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-lime-400 text-xl"
                />
                <h3 className="text-white text-xs md:text-sm">
                  {item.label}
                </h3>
              </div>
            ))}
          </div>
        </BentoBox>

        {/* Partner Section */}
        <BentoBox className="md:col-span-2 md:row-span-2 py-8 md:py-10 px-6 md:px-20 flex flex-col justify-center bg-black/10">
          <h2 className="text-lime-400 font-bold text-2xl md:text-3xl">
            Partner With Us: <br />
            List Your Ground or Academy Today!
          </h2>
          <p className="py-5 text-sm md:text-base">
            Reach more players, fill your slots, and grow your business
            effortlessly by joining our platform.
          </p>
          <button className="px-8 py-3 bg-lime-400 text-green-950 font-bold rounded-full hover:bg-lime-300 transition self-start text-lg md:text-xl">
            Register Now
          </button>
        </BentoBox>

        {/* CTA */}
        <BentoBox className="md:col-span-2 md:row-span-2 py-8 md:py-10 px-6 md:px-20 flex flex-col justify-center items-center text-center bg-black/10">
          <h2 className="text-lime-400 font-bold text-2xl md:text-3xl mb-8">
            Ready to Play?
          </h2>
          <button className="px-8 py-3 bg-lime-400 text-green-950 font-bold rounded-full hover:bg-lime-300 transition text-lg md:text-xl">
            Get Started Now
          </button>
        </BentoBox>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;