/* eslint-disable testing-library/prefer-screen-queries */
import SearchPage from "../Components/UI/SearchPage/SearchPage";
import Home from "../Components/UI/Home/Home";
import { fireEvent, render, screen } from "@testing-library/react";
import React, { PropsWithChildren } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function wrapper({ children }: PropsWithChildren<unknown>) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <MemoryRouter initialEntries={["/Search"]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe("Routing from Search to Home page", () => {
  it("search Route", async () => {
    render(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<SearchPage />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("goToHome"));
    await screen.findByText("MyReads");
  });
});


describe("test search Input", () => {
  it("searchInput should update query", () => {
    render(
      <MemoryRouter>
      <SearchPage />
    </MemoryRouter>
      );
    const searchInput = screen.getByTestId('searchInput') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "React" } });
    expect(searchInput.value).toBe("React");
  });
});
