import "@testing-library/jest-dom";
import * as fetchHook from "../hooks/useFetch";

const mockList = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
];

export const mockFetchFail = () => {
  jest.spyOn(fetchHook, "useFetch").mockReturnValue({
    data: null,
    loading: false,
    error: { message: "error" },
  });
};

export const mockFetchPass = () => {
  jest
    .spyOn(fetchHook, "useFetch")
    .mockReturnValue({ data: mockList, loading: false, error: null });
};
