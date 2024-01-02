import { CDN_URL } from "../../utils/constants.js";

const RestroCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const {
    name,
    cuisines,
    avgRating,
    areaName,
    costForTwo,
    cloudinaryImageId,
    sla,
  } = info;
  const { slaString } = sla;
  return (
    <div className="restroContainer">
      <div className="imageContainer">
        <img
          className="foodIcon"
          alt="restroFood"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="cardDetails">
        <h3> {name}</h3>
        <h4> {areaName}</h4>
        <h3 className="rating"> {avgRating + " " + "stars"}</h3>
        <h3 style={{ color: "grey", fontWeight: 400 }}>
          {cuisines.join(", ")}
        </h3>
        <h4> {costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestroCard;
