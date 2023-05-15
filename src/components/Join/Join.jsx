import React, { useEffect, useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ckezy2k",
        "template_qhc9qcb",
        form.current,
        "1seqw47p_-RWAMjr-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>GET READY</span>
          <span className="stroke-text">TO LEVEL UP</span>
        </div>
        <div>
          <span className="stroke-text">YOUR BODY</span>
          <span>WITH US</span>
        </div>
      </div>

      {/* Right Join */}
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email id"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
