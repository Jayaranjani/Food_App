import RestroCard from "./RestroCard.js";
import resData from "../../utils/resData.js";
import { useState } from "react";

const Body = () => {
  let [listOfResData, setListOfResData] = useState(resData);
  handleClick = () => {
    const filteredList = listOfResData.filter(
      (data) => data.info.avgRating > 4.5
    );
    setListOfResData(filteredList);
  };
  return (
    <div className="bodyContainer">
      <button className="filter-btn" onClick={handleClick}>
        Top Rated Restaurants
      </button>
      <div className="search">Search</div>
      <div className="restroCards">
        {listOfResData.map((item) => {
          return <RestroCard resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
