import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Auth from "./Auth";

test("renders learn react link", () => {
  render(<Auth />);
  expect(screen.getByTestId("wrapper")).toBeInTheDocument();
});
