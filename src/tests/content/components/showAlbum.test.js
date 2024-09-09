import { render, screen } from "@testing-library/react";
import ShowAlbum from "../../../components/content/components/showAlbum";
import { mockFetchFail, mockFetchPass } from "../../../mocks/useFetch";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("test around fetching list", () => {
  it("should show no images found text is empty string", () => {
    render(<ShowAlbum text="" />);
    expect(screen.getByText("No photos to show!")).toBeInTheDocument();
  });

  it("should show no images found text if fetch fails", () => {
    console.error = jest.fn();
    mockFetchFail();
    render(<ShowAlbum text="test" />);

    expect(console.error).toHaveBeenCalledTimes(1);
  });

  it("should show data fetched in a list", () => {
    mockFetchPass();
    render(<ShowAlbum text="ip" />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });

  it("should emphasize all matching words", () => {
    mockFetchPass();
    render(<ShowAlbum text="ip" />);

    const emElements = screen.getAllByRole("emphasis");

    expect(emElements.length).toBe(2);
  });
});
