import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CandidateContext from "../Components/CandidateContext";

const Home = () => {
  const { candidateList, handleVote, resetVote, hasVoted } =
    useContext(CandidateContext);
  const navigate = useNavigate();
  const [initialLoad, setInitialLoad] = useState(true);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-31T12:12:00");
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

  useEffect(() => {
    if (hasVoted && initialLoad) {
      toast.info("You have already voted!");
      setInitialLoad(false);
    }
  }, [hasVoted, initialLoad]);

  const formatTime = (time) => {
    return time !== undefined && time < 10 ? `0${time}` : time;
  };

  const handleCandidateClick = (id) => {
    navigate(`/candidate/${id}`);
  };

  const handleVoteClick = (e, candidateId) => {
    e.stopPropagation(); // Prevent navigation when clicking the button
    const { error, message } = handleVote(candidateId);
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  const handleResetVote = () => {
    resetVote();
    toast.info("Vote status reset. You can vote again.");
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Presidential Election
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
          This is the official voting page for the Presidential Election of
          <span className="text-blue-400"> Somalia</span>. Here, you can learn
          about the candidates running for the presidency and cast your vote for
          the leader you believe will best serve the nation. Your vote is
          crucial in shaping the future of Somalia. The candidates represent a
          range of visions and policies, each aiming to lead the country towards
          growth and stability. Please take the time to review each candidate's
          background, their proposed policies, and their past accomplishments to
          make an informed decision. By participating in this election, you are
          exercising your democratic right and playing a part in the nation's
          future. Thank you for participating in this important democratic
          process and making your voice heard.
        </p>
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          VOTING ENDS IN
        </h1>
        <div className="flex justify-center space-x-6 mb-10">
          {timeLeft.days !== undefined ? (
            <>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-blue-500 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.days)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">days</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-blue-500 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">
                  hours
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-blue-500 py-4 px-6 rounded-lg shadow-lg">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-lg font-bold mt-2 text-gray-700">
                  minutes
                </div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold bg-white text-blue-500 py-4 px-6 rounded-lg shadow-lg">
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
        <div className="text-center mb-10">
          <p className="text-2xl font-semibold text-gray-700">
            Vote for one of these presidential candidates:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {candidateList.map((candidate) => (
            <div
              key={candidate.Id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col cursor-pointer"
              onClick={() => handleCandidateClick(candidate.Id)}
            >
              <img
                src={candidate.Photo}
                alt={candidate.Name}
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-6 text-center flex-grow">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {candidate.Name}
                </h2>
                <div className="flex justify-between text-gray-700 mb-4">
                  <p>Age: {candidate.Age}</p>
                  <p>Votes: {candidate.NumberofVotes}</p>
                </div>
              </div>
              <div className="p-6">
                <button
                  onClick={(e) => handleVoteClick(e, candidate.Id)}
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200 text-xl font-bold"
                >
                  Vote
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={handleResetVote}
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200"
          >
            Reset Vote (For Testing)
          </button>
        </div>
        <p className="text-2xl text-gray-700 leading-relaxed mt-10 text-center">
          The future of Somalia is in your hands. By casting your vote, you are
          taking part in a democratic process that will determine the leadership
          of our nation. It is not only a right but also a responsibility to
          make your voice heard. Review the candidates, consider their visions,
          and choose the one who you believe will lead Somalia towards a
          prosperous and peaceful future. Thank you for your participation and
          your commitment to our country.
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Home;
