"use client"
import React from 'react';
import { useSelector } from 'react-redux';

const QuickStatistics = () => {
  const scored = useSelector((state) => state.score.score);
  const percentile = useSelector((state) => state.score.percentile);
  const rank = useSelector((state) => state.score.rank);

  return (
    <div className="flex justify-around bg-white border border-gray-200 rounded-lg gap-3 shadow-lg p-6 mb-6">
      <div className="text-center p-5 bg-gray-200 rounded-lg">
        <p className="text-2xl font-bold">{rank}</p>
        <p>Your Rank</p>
      </div>
      <div className="text-center p-5 bg-gray-200 rounded-lg">
        <p className="text-2xl font-bold">{percentile}%</p>
        <p>Percentile</p>
      </div>
      <div className="text-center p-5 bg-gray-200 rounded-lg">
        <p className="text-2xl font-bold">{scored} / 15</p>
        <p>Correct Answers</p>
      </div>
    </div>
  );
};

export default QuickStatistics;
