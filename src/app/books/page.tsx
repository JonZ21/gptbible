"use client";
// pages/index.tsx
import React, { useState } from "react";
import BookList from "../components/BookList";

const books = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
]; // Your array of book names

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

  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const handleSelectBook = (title: string) => {
    setSelectedBook(title);
  };

  return (
    <div>
      <h1>Select a Book:</h1>
      <BookList books={books} onSelect={handleSelectBook} />
      {selectedBook && <p>Selected Book: {selectedBook}</p>}
    </div>
  );
};

export default Home;
