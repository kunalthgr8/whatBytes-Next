"use client"
import React from "react";
import SkillTestHeader from "./SkillTestHandler";
import QuickStatistics from "./QuickStats";
import ComparisonGraph from "./Graph";
import SyllabusAnalysis from "./Syllabus";
import QuestionAnalysis from "./QuestionAna";

function SkillTest() {
  return (
    <>
      <h1 className="mt-5 text-base text-wider m-10">Skill Test</h1>
      <div className="flex items-center flex-col lg:flex-row justify-evenly h-full w-full mt-5 gap-10">
        <div className="flex-col justify-evenly h-full w-3/4 lg:w-5/12 gap-5">
          <SkillTestHeader />
          <QuickStatistics />
          <ComparisonGraph />
        </div>
        <div className="flex-col justify-evenly mt-10 pt-10 h-full w-3/4 lg:w-5/12">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </>
  );
}

export default SkillTest;
