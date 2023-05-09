import LogInPage from "../Components/Custom Components/LogInPage/LogInPage";
import SignUp from "../Components/Custom Components/SignUp/SignUp";
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
    <MemoryRouter initialEntries={["/signup"]}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MemoryRouter>
  );
}

describe("Routing from register to login page", () => {
  test("signup Route", async () => {
    render(
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogInPage />} />
      </Routes>,
      { wrapper }
    );
    userEvent.click(screen.getByTestId("goToLogin"));
    await screen.findByText("Login");
  });

});
