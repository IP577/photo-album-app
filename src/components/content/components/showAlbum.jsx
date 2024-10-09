import { useEffect, useRef, useState } from "react";
import RenderThumbnail from "../../../utils/renderThumbnail";
import { useFetch } from "../../../hooks/useFetch";
import {
  UnorderedList,
  ListItem,
  SubHeader,
} from "../../../styles/content/components/showAlbum.styled";
import { ScreenReaderDiv } from "../../../styles/generic/generic.styled";

const ShowAlbum = (props) => {
  const { text } = props;

  const [filteredImages, setFilteredImages] = useState([]);
  const [announcement, setAnnouncements] = useState("");
  const fetchedImages = useRef([]);
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );

  useEffect(() => {
    if (!loading && data !== null) {
      fetchedImages.current = data;
    }
  }, [loading, data]);

  useEffect(() => {
    if (error !== null) {
      console.error(`Error while fetching photos: ${error.message}`);
    }
  }, [error]);

  useEffect(() => {
    // filter the data based on received value
    if (text === "") {
      setFilteredImages([]);
      return;
    }
    const filteredList = fetchedImages.current.filter((imageDetails) =>
      imageDetails.title.includes(text)
    );
    setFilteredImages(filteredList);

    // announcement text
    if (filteredList.length) {
      setAnnouncements(
        `Showing ${filteredList.length} photos for your search.`
      );
    } else {
      setAnnouncements(`No photos to show!`);
    }
  }, [text]);

  return (
    <section className="photo-section">
      <ScreenReaderDiv aria-live="assertive">{announcement}</ScreenReaderDiv>
      {filteredImages.length === 0 ? (
        <SubHeader>No photos to show!</SubHeader>
      ) : (
        <UnorderedList>
          {filteredImages.map((photoDetails, index) => (
            <ListItem
              tabIndex={photoDetails.id}
              key={`list-item-${photoDetails.id}`}
            >
              <RenderThumbnail
                filterText={text}
                data={photoDetails}
                imageNumber={index + 1}
              />
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </section>
  );
};

export default ShowAlbum;
