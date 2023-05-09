import React from "react";
import styles from "./Book.module.css";



interface data {
  book?: any;
  bookShelfHandler?:any;
}

const Book = ({ book, bookShelfHandler }: data) => {

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
