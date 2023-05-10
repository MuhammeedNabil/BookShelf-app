import React, {useContext} from "react";
import styles from "./Book.module.css";
import { IntialData } from "../../../Store/Context";
import { bookData } from '../../UI/Home/Home'
import * as booksAPI from "../../../BooksAPI";

 

interface data {
  book?: any;
  bookShelfHandler?:any;
}



const Book = ({ book }: data) => {

  const { books, setBooks } = useContext(IntialData);

  // ---------------------Handler function to update the shelf of the book-------------------
  const bookShelfHandler = (book: bookData, whichShelf: string) => {
    const updatedBooks: bookData[] = books.map((b: bookData) => {
      if (b.id === book.id) {
        book.shelf = whichShelf;
        return book;
      }
      return b;
    });
    setBooks(updatedBooks);
    booksAPI.update(book, whichShelf).then((data) => data);
  };
  // ------------------------------------------------------------------------------------ //

console.log(book)
  return (
    <div className={`${styles.book}`}>
      <div className={`${styles.bookTop}`}>
        <div
          className={`${styles.bookCover}`}
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book?.imageLinks.smallThumbnail})`,  
          }}
          data-testid='imgURL'
        ></div>
        <div className={`${styles.bookShelfChanger}`}>
          <select defaultValue={book?.status ? book?.status : "none"} onChange={(e) => bookShelfHandler(book, e.target.value)}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className={`${styles.bookTitle}`} data-testid='bookTitle'>{book?.title}</div>
      <div className={`${styles.bookAuthors}`} data-testid='bookAuthors'>{book?.authors}</div>
    </div>
  );
};
export default Book;
