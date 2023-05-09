import SearchPage from "../Components/UI/SearchPage/SearchPage";
import Home from "../Components/UI/Home/Home";
import { queries, render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
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
  test("search Route", async () => {
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

// describe('test search',()=>{
//   test('searchInput',()=>{
//     render(<SearchPage />);
//     const searchInput = screen.getByTestId('searchInput')
//     expect(searchInput).toReturn()
//   })
// })
