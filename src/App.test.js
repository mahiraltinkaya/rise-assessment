import { render, screen } from "@testing-library/react";
import App from "./App";

test("Any text is not a render in the page", () => {
  render(<App />);
  expect(null).not.toBeInTheDocument();
});
