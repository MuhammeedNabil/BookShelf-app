import styles from "./Shelf.module.css";
import Book from "../Book/Book";
import { section, bookData } from "../../UI/Home/Home";
import { IntialData } from "../../../Store/Context";
import { useContext } from "react";

interface data {
  sections?: section[];
  bookShelfHandler?: any;
  book?: bookData;
}

const Shelf = ({ sections }: data) => {
  // const { books } = useContext(IntialData);
  const { bookShelfHandler }: data = useContext(IntialData);
  return (
    <div className={`${styles.bookshelf}`}>
      {sections?.map((section) => (
        <>
          <h2 className={`${styles.bookshelfTitle}`}>{section.sectionName}</h2>
          <div className={`${styles.bookshelfBooks}`}>
            <ol data-testid="bookList" className={`${styles.booksGrid}`}>
              {section.books && section.books.length ? (
                section.books.map((b: bookData) => (
                  <li key={b.id}>
                    <Book book={b} bookShelfHandler={bookShelfHandler} />
                  </li>
                ))
              ) : (
                <span>There are no books added yet.</span>
              )}
            </ol>
          </div>
        </>
      ))}
    </div>
  );
};

export default Shelf;
