import React, { useState, useEffect, useContext } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Shelf from "../../BookData/Shelf/Shelf";
import * as booksAPI from "../../../BooksAPI";

// Bouns Components Import
import Button from "../../Custom Components/Button/Button";
import Card from "../../Custom Components/Card/Card";
import { IntialData } from "../../../Store/Context";

export interface bookData {
  title?: string;
  authors?: string;
  shelf?: string;
  id?: number;
}

export interface section {
  sectionName: string;
  books: bookData[];
}

const Home = () => {
  const { setBooks, books } = useContext(IntialData);
  // const [books, setBooks] = useState<bookData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    booksAPI.getAll().then((data) => setBooks(data));
    setIsLoading(false);
  }, []);

  // --------------------------Filter the books on thier shelf----------------------------
  const currentlyReading = books.filter(
    (book: bookData) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter(
    (book: bookData) => book.shelf === "wantToRead"
  );
  const read = books.filter((book: bookData) => book.shelf === "read");
  // ------------------------------------------------------------------------------------ //

  const sections = [
    { sectionName: "currentlyReading", books: currentlyReading },
    { sectionName: "wantToRead", books: wantToRead },
    { sectionName: "read", books: read },
  ];

  return (
    <div className={`${styles.app}`}>
      <div className={`${styles.listBooks}`}>
        <div className={`${styles.listBooksTitle} d-flex`}>
          <h1 data-testid="homeTitle" className="text-center w-100 ms-5">
            MyReads
          </h1>
          <Link
            data-testid="loginLink"
            to={"/login"}
            className="text-end me-3 mt-2"
          >
            <Button className="px-4">Login</Button>
          </Link>
        </div>
        {!isLoading ? (
          <div className={`${styles.listBooksContent}`}>
            <Shelf sections={sections} />
          </div>
        ) : (
          <Card>
            <p className="text-white text-center">Loading.....</p>
          </Card>
        )}

        <div className={`${styles.openSearch}`}>
          <Link data-testid="goToSearch" to={"/search"}>
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
