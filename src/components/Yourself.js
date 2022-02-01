import { useState } from "react";
import "../styles/Yourself.css";
import axios from "axios";
import guy from "../images/guy_with_thing.png";

function Want() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [text, setText] = useState(false);
  const [call, setCall] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);

  const [product, setProduct] = useState("");
  const [link, setLink] = useState("");
  const [comments, setComments] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
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
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  };
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };
  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const submit = () => {
    const payload = {
      name,
      email,
      phoneNumber,
      text,
      call,
      emailCheck,
      product,
      link,
      comments,
    };

    axios
      .post("http://134.209.72.40:3334/", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Your information has been recieved!");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setText(false);
    setCall(false);
    setEmailCheck(false);
    setProduct("");
    setLink("");
    setComments("");
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
              onChange={handleNameChange}
              style={{ width: "90%" }}
              value={name}
            />
          </div>
          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>*Email</p>
            <textarea
              onChange={handleEmailChange}
              style={{ width: "90%" }}
              value={email}
            />
          </div>
          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Phone Number</p>
            <textarea
              onChange={handlePhoneNumberChange}
              style={{ width: "90%" }}
              value={phoneNumber}
            />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p style={{ marginBottom: "3%" }}>Preferred Contact Method</p>
            <div className="Yourself_text_checkboxes">
              <div className="Yourself_text_checkbox">
                <input
                  type="checkBox"
                  onChange={handleTextChange}
                  checked={text}
                />
                <p>Text</p>
              </div>
              <div className="Yourself_text_checkbox">
                <input
                  type="checkBox"
                  onChange={handleCallChange}
                  checked={call}
                />
                <p>Call</p>
              </div>
              <div className="Yourself_text_checkbox">
                <input
                  type="checkBox"
                  onChange={handleEmailCheckChange}
                  checked={emailCheck}
                />
                <p>Email</p>
              </div>
            </div>
          </div>

          <hr className="Yourself_divider" />

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>What product do you want to source?</p>
            <textarea
              onChange={handleProductChange}
              style={{ width: "90%" }}
              value={product}
            />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Do you have an Amazon or Alibaba link?</p>
            <textarea
              onChange={handleLinkChange}
              style={{ width: "90%" }}
              value={link}
            />
          </div>

          <div style={{ color: "rgb(177, 178, 178)", marginBottom: "2vh" }}>
            <p>Additional Comments</p>
            <textarea
              onChange={handleCommentsChange}
              style={{ width: "90%" }}
              value={comments}
            />
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
              border: "none",
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
