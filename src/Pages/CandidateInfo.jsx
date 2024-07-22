import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CandidateContext from "../Components/CandidateContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CandidateInfo = () => {
  const { id } = useParams();
  const { candidateList, handleVote } = useContext(CandidateContext);
  const candidate = candidateList.find((candidate) => candidate.Id === id);

  if (!candidate) {
    return <p>Candidate not found</p>;
  }

  const handleVoteClick = () => {
    const { error, message } = handleVote(candidate.Id);
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
        <img
          src={candidate.Photo}
          alt={candidate.Name}
          className="w-full lg:w-1/3 h-96 object-cover object-center"
        />
        <div className="p-6 flex flex-col justify-between lg:w-2/3">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {candidate.Name}
            </h2>
            <p className="text-lg text-gray-700 mb-4">Age: {candidate.Age}</p>
            <p className="text-lg text-gray-700 mb-4">
              Votes: {candidate.NumberofVotes}
            </p>
            <p className="text-lg text-gray-700 mb-4">
              {candidate.PersonalBackground}
            </p>
          </div>
          <button
            onClick={handleVoteClick}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200 mt-4"
          >
            Vote
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CandidateInfo;
