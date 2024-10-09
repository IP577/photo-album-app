import styled from "styled-components";

const Image = styled.img`
  margin: 1rem;
`;

const Anchor = styled.a`
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid #333333;
  margin: 0.5rem 0;
  outline-offset: 2px;
  &:focus-within,
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 260px) {
    align-self: center;
    min-width: 182px;
  }
  @media (max-width: 210px) {
    margin: 0.5rem 0;
  }
`;

const Strong = styled.strong`
  margin: 0.5rem 1rem;
`;

export { Image, Anchor, Section, Strong };
