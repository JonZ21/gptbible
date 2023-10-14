"use client";
// pages/index.tsx
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";

const Home: React.FC = () => {
  // Q: what does usestate<string | null> mean
  // A: usestate is a function that returns an array of two elements.
  //   The first element is the current state, and the second element is a function to update the state.
  //   In this case, the state is a string or null.
  //   The initial state is null.

  //q: right now i am not able to select the books, how can i fix that/
  //a: you need to implement the onSelect function in BookList.tsx.
  //   onSelect is a function that takes a string and returns nothing.
  //   You need to call onSelect in Book.tsx when the book is clicked.
  //   You can use the onClick prop to call onSelect.
  type Chapters = {
    chapter: string;
    verses: string;
  };

  type Book = {
    abbr: string;
    book: string;
    chapters: Chapters[];
  };

  const [bibleData, setBibleData] = useState<Book[] | null>(null);
  const [bookArray, setBookArray] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/bible.json"); // Note: path is relative to the public directory
      const data = await response.json();
      setBibleData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (bibleData) {
      const books = bibleData.map((book) => book.book);
      setBookArray(books);
    }
  }, [bibleData]);

  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const handleSelectBook = (title: string) => {
    setSelectedBook(title);
  };

  if (!bibleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Select a Book:</h1>
      <BookList books={bookArray} onSelect={handleSelectBook} />
      {selectedBook && <p>Selected Book: {selectedBook}</p>}
      {bibleData && selectedBook && <p>{bibleData[0].book}</p>}
    </div>
  );
};

export default Home;
