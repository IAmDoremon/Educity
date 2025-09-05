import react from "react";
import "./program.css";
import program1 from "../../assets/images/program-1.png";
import program2 from "../../assets/images/program-2.png";
import program3 from "../../assets/images/program-3.png";
import  programIcon1 from "../../assets/images/program-icon-1.png"
import  programIcon2 from "../../assets/images/program-icon-2.png"
import  programIcon3 from "../../assets/images/program-icon-3.png"
const Programs = () => {
  return (
    <div className="Programs" >
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={programIcon1} alt="" />
          <p>Grduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={programIcon2} alt="" />
          <p>Grduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={programIcon3} alt="" />
          <p>Grduation Degree</p>
        </div>
      </div>
    </div>
  );
};
export default Programs;
