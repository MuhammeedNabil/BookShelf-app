import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import Home from "../Components/UI/Home/Home";
import LogInPage from "../Components/Custom Components/LogInPage/LogInPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SearchPage from "../Components/UI/SearchPage/SearchPage";



function wrapper({ children }: PropsWithChildren<unknown>) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <MemoryRouter initialEntries={["/"]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe("Routing from home to login page", () => {
  it("login Route", async () => {
    render(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("loginLink"));
    await screen.findByText("Login");
  });

  it("search Route", async () => {
    render(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<SearchPage />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("goToSearch"));
    await screen.findByTestId("searchInput");
  });
});

// describe('Searching for my reading word',  () => {
//   test.only('my Reading', async ()=>{
//     render(<Home/>)
//     await screen.findByTestId("homeTitle");

//     // const readingElments = screen.getByTestId('homeTitle')
//     // expect(readingElments.innerHTML).toHaveTextContent('MyReads')
//   })
// })



describe('fetch fuction and display on shelf', ()=>{
  // test('render getAll Books', async () => {
  // const mockResponce: book={
  //     status:200,
  //     headers:'connect',
  //     ok: true,
  //     redirected: true,
  //     statusText: '',
  //     json: () => Promise.resolve({id:1,title:'Book 1'})
  //   }
  //   jest.spyOn(global,'fetch').mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockResponce),
  //   });
  //   render(<Shelf />);
  //   const bookItems = await screen.findAllByRole('listitem');
  //     expect(bookItems).toHaveLength(3);

  //     expect(bookItems[0]).toHaveTextContent('Book 1');
  //       global.fetch.mockRestore();
  // });

});
