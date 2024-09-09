import { render, screen } from "@testing-library/react";
import RenderThumbnail from "../../utils/renderThumbnail";

const mockObject = {
  albumId: 1,
  id: 4,
  thumbnailUrl: "https://via.placeholder.com/150/d32776",
  title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  url: "https://via.placeholder.com/600/d32776",
};

describe("render thumbnail with title, text and link", () => {
  it("should render provided image", () => {
    render(
      <RenderThumbnail filterText="di" data={mockObject} imageNumber={1} />
    );

    // assert the image
    expect(
      screen.getByRole("img", { name: "Image number 1" })
    ).toBeInTheDocument();
  });

  it("should render title, anchor and call for action", () => {
    render(
      <RenderThumbnail filterText="di" data={mockObject} imageNumber={1} />
    );

    // assert the call to action
    expect(
      screen.getByText("Check out the full image here")
    ).toBeInTheDocument();

    // assert the anchor tag
    expect(
      screen.getByRole("link", {
        name: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      })
    ).toBeInTheDocument();

    // assert the caption to be in the document
    expect(screen.getAllByText(/(?:<em>\s*(.*?)\s*<\/em>|(\w+))/g).length).toBe(
      4
    );
  });

  it("should emphasize all matching words", () => {
    render(
      <RenderThumbnail filterText="di" data={mockObject} imageNumber={1} />
    );

    const emElements = screen.getAllByRole("emphasis");

    // assert number of words italicized
    // 2 words expected to be italicized
    expect(emElements.length).toBe(2);
  });
});
