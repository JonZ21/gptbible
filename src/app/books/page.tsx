"use client";
// pages/index.tsx
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import ChapterList from "../components/chapterList";
const Home: React.FC = () => {
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
  const [selectedBook, setSelectedBook] = useState<Book>();
  const [selectedChapter, setSelectedChapter] = useState<number>();

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

  // .find is to return a single, .filter is to return an array
  const handleSelectBook = (title: string) => {
    const book = bibleData?.find((book) => book.book === title);
    setSelectedBook(book);
  };

  const handleSelectChapter = (chapter: number) => {
    setSelectedChapter(chapter);
    console.log("SELECTED " + chapter);
  };

  if (!bibleData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Select a Book:</h1>
      <BookList books={bookArray} onSelect={handleSelectBook} />
      {selectedBook && (
        <p>
          Selected Book: {selectedBook.book} # of chapters:{" "}
          {selectedBook.chapters.length}
        </p>
      )}

      <ChapterList chapters={[0, 1, 2]} onSelect={handleSelectChapter} />
    </div>
  );
};

export default Home;
