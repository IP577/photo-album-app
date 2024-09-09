import { FigCaption } from "../styles/utils/highlightedText.styled";

const HighlightedText = ({ id, text, highlight }) => {
  const words = text.split(" ");
  return (
    <FigCaption id={id}>
      {words.map((word, index) =>
        word.includes(highlight) ? <em key={index}>{word} </em> : `${word} `
      )}
    </FigCaption>
  );
};

export default HighlightedText;
