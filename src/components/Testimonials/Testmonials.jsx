import React from "react";
import "./Testimonial.css";
import next_icon from "../../assets/images/next-icon.png";
import back_icon from "../../assets/images/back-icon.png";
import user_1 from "../../assets/images/user-1.png";
import user_2 from "../../assets/images/user-2.png";
import user_3 from "../../assets/images/user-3.png";
import user_4 from "../../assets/images/user-4.png";
import { useRef } from "react";
const Testimonials = () => {

//========================script

const slider =useRef();
let tx =0;
const slideForward =()=>{
  
}
const slideBackward =()=>{
  
}


  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_1} alt="" />
                <div>
                  <h3>kailash saklani</h3>
                  <span>Edusity , USA</span>
                </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  molestiae id aspernatur fugiat. Assumenda ea, ad quis iure est
                  similique omnis deleniti accusamus iusto dolorum harum enim
                  voluptatibus, eligendi veritatis.
                </p>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_2} alt="" />
                <div>
                  <h3>kailash saklani</h3>
                  <span>Edusity , USA</span>
                </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  molestiae id aspernatur fugiat. Assumenda ea, ad quis iure est
                  similique omnis deleniti accusamus iusto dolorum harum enim
                  voluptatibus, eligendi veritatis.
                </p>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_3} alt="" />
                <div>
                  <h3>kailash saklani</h3>
                  <span>Edusity , USA</span>
                </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  molestiae id aspernatur fugiat. Assumenda ea, ad quis iure est
                  similique omnis deleniti accusamus iusto dolorum harum enim
                  voluptatibus, eligendi veritatis.
                </p>
              
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="userInfo">
                <img src={user_4} alt="" />
                <div>
                  <h3>kailash saklani</h3>
                  <span>Edusity , USA</span>
                </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  molestiae id aspernatur fugiat. Assumenda ea, ad quis iure est
                  similique omnis deleniti accusamus iusto dolorum harum enim
                  voluptatibus, eligendi veritatis.
                </p>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
