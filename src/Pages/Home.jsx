import React, { useState, useEffect } from "react";

const Home = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-31T12:12:00"); // Set the target date and time
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time !== undefined && time < 10 ? `0${time}` : time;
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
          VOTING ENDS IN
        </h1>
        <div className="flex justify-center space-x-6">
          {timeLeft.days !== undefined ? (
            <>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-purple-600 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-purple-600 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">
                  hours
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-purple-600 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">
                  minutes
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-purple-600 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">
                  seconds
                </div>
              </div>
            </>
          ) : (
            <div className="text-2xl font-bold text-gray-800">
              00 days 00 hours 00 minutes 00 seconds
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
