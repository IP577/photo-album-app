import { useEffect, useRef, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import {
  Section,
  Label,
  Input,
  ErrorLabel,
} from "../styles/utils/searchBox.styled";
import { validateInput } from "./validations";
import { ScreenReaderDiv } from "../styles/generic/generic.styled";

const SearchBox = (props) => {
  const { label, dobounceDelay = 500, onSearch } = props;

  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const labelVal = useRef(label.replaceAll(" ", ""));

  const { callDebounceFunction, clearTimout } = useDebounce(
    dobounceDelay,
    onSearch
  );

  useEffect(() => {
    return () => {
      clearTimout();
    };
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = validateInput(value);

    setValue(value);
    isValid && callDebounceFunction(value.toLowerCase());
    setError(!isValid);
  };

  return (
    <Section>
      <Label htmlFor={labelVal.current}>{label}</Label>
      <Input
        id={labelVal.current}
        type="text"
        autoComplete="off"
        spellCheck="false"
        placeholder="flowers"
        value={value}
        onChange={handleChange}
        error={error}
      />
      {error && (
        <ScreenReaderDiv aria-live="assertive">
          Wrong input: Only alphabets are allowed
        </ScreenReaderDiv>
      )}
      <ErrorLabel htmlFor={labelVal.current} error={error}>
        Only alphabets allowed
      </ErrorLabel>
    </Section>
  );
};

export default SearchBox;
