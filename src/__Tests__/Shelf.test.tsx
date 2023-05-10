import { render, screen } from "@testing-library/react";
import { section } from "../Components/UI/Home/Home";
import Shelf from "../Components/BookData/Shelf/Shelf";
import { MemoryRouter } from "react-router-dom";

const currentlyReading = [
  { title: "React Native", authors: "jeff", shelf: "currentlyReading", id: 3 },
];

const sections: section[] = [
  { sectionName: "currentlyReading", books: currentlyReading },
];

describe("Book from context", () => {
  it("test Books in Home", () => {
    render(
      <MemoryRouter>
        <Shelf sections={sections} />
      </MemoryRouter>
    );
    const book = screen.getByText("currentlyReading");
    // eslint-disable-next-line testing-library/no-node-access
    expect(book).toBeInTheDocument();
  });
});
