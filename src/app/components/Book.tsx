// components/Book.tsx
import React from "react";

// Q: what does interface do?
// A: interface is a way to define a type.
//   In this case, BookProps is a type that has two properties: title and onSelect.
//  title is a string, and onSelect is a function that takes a string and returns nothing.

interface BookProps {
  title: string;
  onSelect: (title: string) => void;
}

//Q: what does React.FC do?
// A: React.FC is a type that is a function that returns a React element.
//   In this case, Book is a function that takes BookProps and returns a React element.

const Book: React.FC<BookProps> = ({ title, onSelect }) => {
  return (
    <div
      className="book ml-7 bg-white rounded-xl mt-2 text-black text-center p-2 cursor-pointer"
      onClick={() => onSelect(title)}
    >
      {title}
    </div>
  );
};

export default Book;
