import { useState } from "react";
import "./App.css";
import searchImages from "./Api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
