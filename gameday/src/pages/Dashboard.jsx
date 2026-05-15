import React from 'react'
import NavBar from "../components/NavBar.jsx";
import BentoBox from "../components/BentoBox.jsx";
import {
    faArrowRightFromBracket,
    faCircleUser, faClockRotateLeft, faFutbol,
    faStar, faChartLine, faTrophy, faGraduationCap,
    faUserPen,
    faUserPlus,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-green-950 text-white px-4 md:px-6 ">
      <NavBar/>
        <h1 className="font-bold text-4xl ">
            Welcome Back, Ethan!
        </h1>
        <p className="text-gray-400 ">
            Manage your bookings and schedules from your personal dashboard.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            <BentoBox className="col-span-1 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faCircleUser} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Profile Actions</h2>
                </div>
                <div className="flex flex-col">
                    <BentoBox className="flex items-center bg-green-800/70 mt-4 p-4 cursor-pointer">
                        <FontAwesomeIcon icon={faUserPen} className="mr-2 text-lime-400 text-xl" />
                        <p>Edit Your Profile</p>
                    </BentoBox>
                    <BentoBox className="flex items-center bg-green-800/70 mt-4 p-4 cursor-pointer">
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2 text-lime-400 text-xl" />
                        <p>Invite Friends</p>
                    </BentoBox>
                    <BentoBox className="flex items-center bg-green-800/70 mt-4 p-4 cursor-pointer">
                        <FontAwesomeIcon icon={faWallet} className="mr-2 text-lime-400 text-xl" />
                        <p>Your Payments</p>
                    </BentoBox>
                    <BentoBox className="flex items-center bg-green-800/70 mt-4 p-4 cursor-pointer">
                        <FontAwesomeIcon icon={faStar} className="mr-2 text-lime-400 text-xl" />
                        <p>Your Ratings</p>
                    </BentoBox>
                    <BentoBox className="flex items-center justify-center bg-red-950 mt-6 p-2 cursor-pointer">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2  text-xl" />
                        <p className="text-sm">Sign Out</p>
                    </BentoBox>
                </div>
            </BentoBox>
            <BentoBox className="md:col-span-2 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faFutbol} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Upcoming Matches</h2>
                </div>
                <div className="flex flex-col">
                    <BentoBox className="flex items-center bg-green-800/20 border-l-4 border-l-lime-400 mt-4 p-4 cursor-pointer">
                        <div className="flex justify-between w-full">
                            <div className="flex justify-between w-full items-center">
                                <div>
                                    <p className="text-white-300 font-bold">Pune Turf Arena</p>

                                    <p className="text-sm text-gray-400">5v5 Turf</p>
                                </div>
                                <p className="text-sm text-gray-200">Sunday 7:00 PM</p>
                            </div>
                        </div>
                    </BentoBox>
                </div>
            </BentoBox>
            <BentoBox className="col-span-1 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faChartLine} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Your Stats</h2>
                </div>
            </BentoBox>
            <BentoBox className="col-span-1 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faTrophy} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Tournament Registrations</h2>
                </div>
            </BentoBox>
            <BentoBox className="col-span-1 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Enrolled Academies</h2>
                </div>
            </BentoBox>
            <BentoBox className="col-span-1 p-5 bg-white/5">
                <div className="flex items-center border-b border-green-900/90 pb-4 ">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="mr-2 text-lime-400 text-xl" />
                    <h2 className="text-xl font-extrabold text-lime-400 uppercase">Booking History</h2>
                </div>
            </BentoBox>
        </div>
    </div>
  )
}

export default Dashboard