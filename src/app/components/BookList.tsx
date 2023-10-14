// components/BookList.tsx
import React from "react";
import Book from "./Book";

interface BookListProps {
  books: string[];
  onSelect: (title: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onSelect }) => {
  return (
    <div className="book-list flex flex-wrap justify-start">
      {books.map((book, index) => (
        <Book key={index} title={book} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default BookList;
