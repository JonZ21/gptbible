import React from "react";

interface ChapterProps {
  summary: string;
}

const Summary: React.FC<ChapterProps> = ({ summary }) => {
  return <div className=" bg-indigo-900">{summary}</div>;
};

export default Summary;
