import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const QuestionAnalysis = () => {
  const scored = useSelector((state) => state.score.score);
  const percentile = useSelector((state) => state.score.percentile);

  const data = [
    { percentile: 10, score: 5 },
    { percentile: 25, score: 6 },
    { percentile: 50, score: 7 },
    { percentile: 75, score: 9 },
    { percentile: 90, score: 10 },
    { percentile: percentile, score: scored },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Comparison Graph</h3>
      <p className="mb-4">You scored {scored} correct out of 15 questions.</p>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="percentile"
              label={{ value: 'Percentile', position: 'insideBottom', offset: -5 }}
            />
            <YAxis
              label={{ value: 'Score', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip />
            <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
