import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.h2`
  margin: 0 1rem;
`;

export { UnorderedList, ListItem, SubHeader };
