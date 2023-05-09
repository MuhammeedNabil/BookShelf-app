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