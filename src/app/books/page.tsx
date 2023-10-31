"use client";
// pages/index.tsx
import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import ChapterList from "../components/ChapterList";
import axios from "axios";

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
  const [chapterText, setChapterText] = useState<string>("");
  const singleChapterBooks = [
    "2 John",
    "3 John",
    "Jude",
    "Philemon",
    "Obadiah",
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/bible.json"); // Note: path is relative to the public directory
      const data = await response.json();
      setBibleData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!selectedBook) {
      return;
    }
    console.log(
      "http://127.0.0.1:8000/api/get_Chapter/" +
        selectedBook.book +
        "/" +
        selectedChapter +
        "/"
    );

    if (singleChapterBooks.includes(selectedBook.book)) {
      axios
        .get("http://127.0.0.1:8000/api/get_Book/" + selectedBook.book + "/")
        .then((response) => {
          console.log("API: " + response.data.passages[0]);
          setChapterText(response.data.passages[0]);
        })
        .catch((error) => {
          console.error("There was an error fetching data", error);
        });
    } else {
      axios
        .get(
          "http://127.0.0.1:8000/api/get_Chapter/" +
            selectedBook.book +
            "/" +
            selectedChapter +
            "/"
        )
        .then((response) => {
          console.log("API: " + response.data.passages[0]);
          setChapterText(response.data.passages[0]);
        })
        .catch((error) => {
          console.error("There was an error fetching data", error);
        });
    }
  }, [selectedChapter, selectedBook]); // The empty dependency array ensures this runs only once.

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
    setSelectedChapter(1);
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
        <div>
          <p>
            Selected Book: {selectedBook.book} # of chapters:{" "}
            {selectedBook.chapters.length}
          </p>
          <ChapterList
            chapterLength={selectedBook.chapters.length}
            onSelect={handleSelectChapter}
          />
          <p>Selected Chapter: {selectedChapter}</p>
          <p>{chapterText}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
