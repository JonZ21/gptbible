import React from "react";
import Chapter from "./Chapter";

interface ChapterListProps {
  chapters: number[];
  onSelect: (chapter: number) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({ chapters, onSelect }) => {
  return (
    <div className="chapter-list flex flex-wrap justify-start">
      {chapters.map((index) => (
        <Chapter key={index} chapter={index + 1} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default ChapterList;
