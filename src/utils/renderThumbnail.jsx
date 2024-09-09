import HighlightedText from "./highlightedText";
import {
  Image,
  Anchor,
  Section,
  Strong,
} from "../styles/utils/renderThumbnail.styled";

const RenderThumbnail = (props) => {
  const { filterText, data, imageNumber } = props;

  debugger;
  return (
    <Section>
      <Image
        src={data.thumbnailUrl}
        alt={`Image number ${imageNumber}`}
        height="150"
        width="150"
      />
      <HighlightedText
        id={`title-${imageNumber}`}
        text={data.title}
        highlight={filterText}
      />
      <Strong>Check out the full image here</Strong>
      <Anchor
        href={data.url}
        type="image/png"
        target="_blank"
        rel="noopener noreferrer"
        aria-labelledby={`title-${imageNumber}`}
      />
    </Section>
  );
};

export default RenderThumbnail;
