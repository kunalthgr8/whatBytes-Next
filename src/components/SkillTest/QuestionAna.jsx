import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const QuestionAnalysis = () => {
  const totalQuestions = 15;
  const scored = useSelector((state) => state.score.score);

  const data = [
    {
      name: 'Correct',
      value: scored, 
      fill: '#4caf50',
    },
    {
      name: 'Incorrect',
      value: totalQuestions - scored, 
      fill: '#f44336',
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Question Analysis</h3>
      <p className="mb-4 font-bold">You scored {scored} questions correct out of {totalQuestions} questions.</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="80%"
            barSize={20}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, totalQuestions]} 
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              minAngle={15}
              clockWise
              dataKey="value"
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
