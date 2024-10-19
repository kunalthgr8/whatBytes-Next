const SyllabusAnalysis = () => {
    const topics = [
      { name: 'HTML Tools, Forms, History', score: 80 },
      { name: 'Tags & References in HTML', score: 60 },
      { name: 'Tables & References in HTML', score: 24 },
      { name: 'Tables & CSS Basics', score: 96 },
    ];
  
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold mb-4">Syllabus Wise Analysis</h3>
        {topics.map((topic, index) => (
          <div key={index} className="mb-4">
            <p className="p-2 pl-0">{topic.name}</p>
            <div className="relative h-2 bg-gray-200 rounded-full">
              <div
                style={{ width: `${topic.score}%` }}
                className={`h-2 rounded-full ${
                  topic.score > 75 ? 'bg-green-500' : 
                  topic.score > 50 ? 'bg-blue-500' : 
                  'bg-red-500'
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default SyllabusAnalysis;
  