import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  margin-right: 6rem;
  margin-bottom: 0.5rem;
  font-size: large;
  @media (max-width: 230px) {
    max-width: 100vw;
    align-self: baseline;
  }
`;

const ErrorLabel = styled.label`
  visibility: ${({ error }) => (error ? "visible" : "hidden")};
  color: red;
  font-size: 0.75rem;
  margin-right: 4rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 2rem;
  background: #f0f0f0;
  font-size: 1rem;
  border: 2px solid ${({ error }) => (error ? "red" : "#ccc")};
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 230px) {
    max-width: 100vw;
    align-self: baseline;
  }
`;

export { Section, Label, Input, ErrorLabel };
