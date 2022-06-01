import "./App.css";

import data from "./components/LectureData";
import filterData from "./utils/filterData";
import { Header } from "./components/Header";
import { DisplayOnCard } from "./components/DisplayOnCard";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredData = filterData(data, searchQuery);

  return (
    <div className="App">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredData.map((data, i) => (
        <DisplayOnCard key={i} lectureData={data} />
      ))}
    </div>
  );
};

export default App;
