import { useState } from "react";
import SearchBox from "../../utils/searchBox";
import ShowAlbum from "./components/showAlbum";

const Content = () => {
  const [searchText, setSearchText] = useState();

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <main>
      <SearchBox label="Search Photos" onSearch={handleSearch} />
      <ShowAlbum text={searchText} />
    </main>
  );
};

export default Content;
