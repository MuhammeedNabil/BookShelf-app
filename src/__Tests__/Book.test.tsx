import { render, screen } from "@testing-library/react";
import Book from "../Components/BookData/Book/Book";
import { MemoryRouter } from "react-router-dom";

describe("Book component test with a book", () => {
  it("bookInShelf", () => {
    const bookContent = {
      id: "sJf1vQAACAAJ",
      shelf: "currentlyReading",
      title: "Learning Web Development",
      authors: "Harmeet",
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      },
    };

    render(
      <MemoryRouter>
        <Book book={bookContent} />
      </MemoryRouter>
    );
    const title = screen.getByTestId("bookTitle");
    const authors = screen.getByTestId("bookAuthors");
    const img = screen.getByTestId("imgURL");

    expect(title).toHaveTextContent("Learning Web Development");
    expect(authors).toHaveTextContent("Harmeet");
    expect(img).toHaveStyle(
      "backgroundImage:url(http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api)"
    );
  });
});
