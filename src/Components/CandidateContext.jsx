import React, { createContext, useState, useEffect } from "react";
import candidatesData from "../Data/Data";

const CandidateContext = createContext();

export const CandidateProvider = ({ children }) => {
  const [candidateList, setCandidateList] = useState(() => {
    const savedCandidates = localStorage.getItem("candidates");
    return savedCandidates ? JSON.parse(savedCandidates) : candidatesData;
  });

  const [hasVoted, setHasVoted] = useState(() => {
    const savedVote = localStorage.getItem("hasVoted");
    return savedVote ? JSON.parse(savedVote) : false;
  });

  useEffect(() => {
    localStorage.setItem("candidates", JSON.stringify(candidateList));
  }, [candidateList]);

  useEffect(() => {
    localStorage.setItem("hasVoted", JSON.stringify(hasVoted));
  }, [hasVoted]);

  const handleVote = (candidateId) => {
    if (hasVoted) {
      return { error: true, message: "You have already voted!" };
    }

    const updatedCandidates = candidateList.map((candidate) => {
      if (candidate.Id === candidateId) {
        return { ...candidate, NumberofVotes: candidate.NumberofVotes + 1 };
      }
      return candidate;
    });

    setCandidateList(updatedCandidates);
    setHasVoted(true);
    return {
      error: false,
      message: `You voted for ${
        candidateList.find((c) => c.Id === candidateId).Name
      }`,
    };
  };

  const resetVote = () => {
    localStorage.removeItem("hasVoted");
    setHasVoted(false);
  };

  return (
    <CandidateContext.Provider
      value={{ candidateList, hasVoted, handleVote, resetVote }}
    >
      {children}
    </CandidateContext.Provider>
  );
};

export default CandidateContext;
