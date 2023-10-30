import React from "react";
import Chapter from "./Chapter";

interface ChapterListProps {
  chapterLength: number;
  onSelect: (chapter: number) => void;
}

const ChapterList: React.FC<ChapterListProps> = ({
  chapterLength,
  onSelect,
}) => {
  // an array of length chapterLength, with each element being a Chapter component
  const chapters = Array.from({ length: chapterLength }, (_, index) => (
    <Chapter key={index} chapter={index + 1} onSelect={onSelect} />
  ));

  return (
    <div className="chapter-list flex flex-wrap justify-start">{chapters}</div>
  );
};

export default ChapterList;
