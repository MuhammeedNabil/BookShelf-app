import LogInPage from "../Components/Custom Components/LogInPage/LogInPage";
import SignUp from "../Components/Custom Components/SignUp/SignUp";
import Home from "../Components/UI/Home/Home";
import { render, screen } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function wrapper({ children }: PropsWithChildren<unknown>) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return (
    <MemoryRouter initialEntries={["/login"]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe("Routing from login to sginup and home pages", () => {
  it("sginup Route", async () => {
    render(
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("tosignup"));
    await screen.findByText("Register");
  });

  it("home Route", async () => {
    render(
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("toHome"));
    await screen.findByText("MyReads");
  });
});
