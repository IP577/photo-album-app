import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBox from "../../utils/searchBox";

// jest.useFakeTimers();

describe("test the search functionality", () => {
  it("should change the value of text box", async () => {
    // Arrange
    const user = userEvent.setup({ delay: null });
    const mockFunction = jest.fn();
    render(<SearchBox label="Search Photos" onSearch={mockFunction} />);

    // Act
    const inputBox = screen.getByRole("textbox", { name: "Search Photos" });
    await user.type(inputBox, "test1");

    // Assert
    expect(inputBox.value).toBe("test1");
  });

  it("should trigger the provided function with a delay of 500ms", async () => {
    // Arrange
    jest.useFakeTimers();
    const user = userEvent.setup({ delay: null });
    const mockFunction = jest.fn();

    render(<SearchBox label="Search Photos" onSearch={mockFunction} />);

    expect(screen.getByText("Search Photos")).toBeInTheDocument();

    // Act
    const inputBox = screen.getByRole("textbox", { name: "Search Photos" });
    await user.type(inputBox, "test");

    // Assert
    expect(inputBox.value).toBe("test");
    jest.advanceTimersByTime(500);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
