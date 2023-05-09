import React, { useState, useEffect } from "react";
import styles from "./SearchPage.module.css";
import { Link } from "react-router-dom";
import * as booksAPI from "../../../BooksAPI";
import Book from "../../BookData/Book/Book";

interface bookData {
  title: string;
  authors: string;
  shelf: string;
  id: number;
}

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [foundedBooks, setFoundedBooks] = useState<bookData[]>([]);
  // const { bookShelfHandler }: any = BookContext();

  useEffect(() => {
    let isAllNameIsGet = true;
    if (query) {
      booksAPI.search(query).then((data) => {
        if (data.error) {
          setFoundedBooks([]);
        } else {
          if (isAllNameIsGet) {
            setFoundedBooks(data);
          }
        }
      });
    }
    return () => {
      isAllNameIsGet = false;
      setFoundedBooks([]);
    };
  }, [query]);

  // ---------------------Handler function to update the shelf of the book-------------------
  const bookShelfHandler = (book: bookData, whichShelf: string) => {
    booksAPI.update(book, whichShelf).then((data) => data);
  };
  // ---------------------------------------------------------------------------------------
  return (
    <div className={`${styles.searchBooks}`}>
      <div className={`${styles.searchBooksBar}`}>
        <Link data-testid='goToHome' className={`${styles.closeSearch}`} to={"/"}>
          Close
        </Link>
        <div className={`${styles.searchBooksInputWrapper}`}>
          <input
          data-testid='searchInput'
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className={`${styles.searchBooksResults}`}>
        <ol className={`${styles.booksGrid}`}>
          {foundedBooks.map((b: bookData) => (
            <li key={b.id}>
              <Book book={b} bookShelfHandler={bookShelfHandler} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
