import styles from "./Shelf.module.css";
import Book from "../Book/Book";
import { section, BookContext, bookData, IntialData } from "../../UI/Home/Home";

interface data {
  sections?: section[];
  bookShelfHandler?: any;
  book?: bookData;
}

const Shelf = () => {
  const { sections, bookShelfHandler }: data = BookContext();
  return (
    <div className={`${styles.bookshelf}`}>
      {sections?.map((section) => (
        <>
          <h2 className={`${styles.bookshelfTitle}`}>
            {section.sectionName}
          </h2>
          <div className={`${styles.bookshelfBooks}`}>
            <ol className={`${styles.booksGrid}`}>
              {(section.books && section.books.length) ?
              section.books.map((b: bookData) => (
                <IntialData.Provider value={
           
                {  book:b}
                }>
                <li key={b.id}>
                  <Book book={b} bookShelfHandler={bookShelfHandler} />
                </li>

                </IntialData.Provider>
              )): <span>There are no books added yet.</span>}
            </ol>
          </div>
        </>
      ))}
    </div>
  );
};

export default Shelf;
