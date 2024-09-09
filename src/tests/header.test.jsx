import { render, screen } from "@testing-library/react";
import Header from "../components/header";

describe("Rendered elements", () => {
  it("should show heading", () => {
    render(<Header />);

    expect(
      screen.getByText("Ishaan Pareek's Photo Album Web App")
    ).toBeInTheDocument();
  });
});
