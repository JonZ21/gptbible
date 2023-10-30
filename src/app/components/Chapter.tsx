import React from "react";

interface ChapterProps {
  chapter: number;
  onSelect: (chapter: number) => void;
}

const Chapter: React.FC<ChapterProps> = ({ chapter, onSelect }) => {
  return (
    <div
      className="chapter ml-7 bg-slate-400 rounded-xl mt-2 text-black text-center p-2 cursor-pointer"
      onClick={() => onSelect(chapter)}
    >
      {chapter}
    </div>
  );
};

export default Chapter;
