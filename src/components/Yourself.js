import { useState } from "react";
import "../styles/Yourself.css";
import axios from "axios";

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
      .post("http://localhost:3333/", payload)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Want">
      <p>Tell us about yourself</p>
      <p>What product do you want to source?</p>
      <textarea onChange={handleProductChange} />
      <p>Do you have an Amazon or Alibaba link?</p>
      <textarea onChange={handleLinkChange} />
      <p>How soon do you need samples?</p>
      <textarea onChange={handleSoonChange} />
      <hr />
      <p>Full Name</p>
      <textarea onChange={handleFullNameChange} />
      <p>Email</p>
      <textarea onChange={handleEmailChange} />
      <p>Phone Number</p>
      <textarea onChange={handlePhoneNumberChange} />
      <div>
        <input type="checkBox" onChange={handleTextChange} />
        <p>Text</p>
        <input type="checkBox" onChange={handleCallChange} />
        <p>Call</p>
        <input type="checkBox" onChange={handleEmailCheckChange} />
        <p>Email</p>
      </div>
      <p onClick={submit}>Submit</p>
    </div>
  );
}

export default Want;
