import { useState } from "react";
import "../styles/Yourself.css";
import axios from "axios";
import guy from "../images/guy_with_thing.png";

function Want() {
  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");
  const [soon, setSoon] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [text, setText] = useState(false);
  const [call, setCall] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSoonChange = (e) => {
    setSoon(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.checked);
  };

  const handleCallChange = (e) => {
    setCall(e.target.checked);
  };

  const handleEmailCheckChange = (e) => {
    setEmailCheck(e.target.checked);
  };

  const submit = () => {
    const payload = {
      product,
      link,
      soon,
      fullName,
      email,
      phoneNumber,
      text,
      call,
      emailCheck,
    };

    axios
      .post("http://134.209.72.40:3334/", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Yourself">
      <div className="Yourself_text">
        <div style={{ width: "80%" }}>
          <p style={{ color: "#009AE7", fontSize: "2vw", marginBottom: "2vh" }}>
            Tell us about yourself
          </p>
          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>*Name</p>
            <textarea
              onChange={handleFullNameChange}
              style={{ width: "90%" }}
            />
          </div>
          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>*Email</p>
            <textarea onChange={handleEmailChange} style={{ width: "90%" }} />
          </div>
          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Phone Number</p>
            <textarea
              onChange={handlePhoneNumberChange}
              style={{ width: "90%" }}
            />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p style={{ marginBottom: "3%" }}>Preferred Contact Method</p>
            <div className="Yourself_text_checkboxes">
              <div className="Yourself_text_checkbox">
                <input type="checkBox" onChange={handleTextChange} />
                <p>Text</p>
              </div>
              <div className="Yourself_text_checkbox">
                <input type="checkBox" onChange={handleCallChange} />
                <p>Call</p>
              </div>
              <div className="Yourself_text_checkbox">
                <input type="checkBox" onChange={handleEmailCheckChange} />
                <p>Email</p>
              </div>
            </div>
          </div>

          <hr className="Yourself_divider" />

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>What product do you want to source?</p>
            <textarea onChange={handleProductChange} style={{ width: "90%" }} />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Do you have an Amazon or Alibaba link?</p>
            <textarea onChange={handleLinkChange} style={{ width: "90%" }} />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Additional Comments</p>
            <textarea onChange={handleSoonChange} style={{ width: "90%" }} />
          </div>

          <button
            type="button"
            onClick={submit}
            style={{
              cursor: "pointer",
              color: "white",
              backgroundColor: "#009AE7",
              width: "90%",
              borderRadius: "12px",
              padding: "2%",
              fontSize: "1vw",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <img className="Yourself_image" src={guy} />
    </div>
  );
}

export default Want;
