import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/images/msg-icon.png';
import mail_icon from '../../assets/images/mail-icon.png';
import phone_icon from '../../assets/images/phone-icon.png';
import location_icon from '../../assets/images/location-icon.png';
import White_arrow from "../../assets/images/White-arrow.png"
const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "70dc66ca-3227-4c4b-8505-b3a3551a3316");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



        return (
            <div className="contact">
                <div className="contact-col">
                    <h3>Send a Message <img src={msg_icon} alt="" /></h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quis
                        aliquam iste unde odio, officia provident molestias corporis voluptas
                        ut laborum sint praesentium hic possimus similique sed eveniet, illum
                        quos! Illo a necessitatibus perferendis consequatur exercitationem
                        doloremque enim praesentium ducimus?
                    </p>
                    <ul>
                        <li><img src={mail_icon} alt="" /> Contact@kailashsakani.in</li>
                        <li> <img src={phone_icon} alt="" />+1 123-456-789</li>
                        <li><img src={location_icon} alt="" />Dehradun Rishpna <br />Uttrakhand 248001 bharat  </li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your Name</label>
                        <input type="text" name="name" id="" placeholder="Enter Your Name" required />
                        <label >Phone Number</label>
                        <input type="number" name="phone" id="" placeholder="Enter Your Number" required />
                        <label htmlFor="">Write  your message here</label>
                        <textarea name="" id="message" cols="30" rows="10" placeholder="Enter your message" required></textarea>
                        <button type="submit" className="btn dark-btn">Submit Now <img src={White_arrow} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        );
    };
    export default Contact;
