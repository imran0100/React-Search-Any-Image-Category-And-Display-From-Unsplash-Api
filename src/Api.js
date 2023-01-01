import axios from "axios";
const SearchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID A-2uQrKyYW49-qI544bS3arV-AzbyCFZyV9BcWQVUhg",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};
export default SearchImages;
