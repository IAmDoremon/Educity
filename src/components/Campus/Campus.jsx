import React from "react";
import "./Campus.css";
import gallery1 from "../../assets/images/gallery-1.png";
import gallery2 from "../../assets/images/gallery-2.png";
import gallery3 from "../../assets/images/gallery-3.png";
import gallery4 from "../../assets/images/gallery-4.png";
import white_arrow from "../../assets/images/white-arrow.png"
const Campus = () => {
  return (
    <div className="Campus">
      <div className="Gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className="btn dark-btn">See More Here <img src={white_arrow} alt="" /></button>
    </div>
  );
};
export default Campus;
