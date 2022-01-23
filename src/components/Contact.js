import "../styles/Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact_text">
        <p style={{ color: "#009AE7", fontSize: "2vw" }}>
          Feel free to contact us if you have any questions.
        </p>
        <p style={{ color: "rgb(177, 178, 178)" }}>+1 938-583-1859</p>
        <p style={{ color: "rgb(177, 178, 178)", marginBottom: "1vh" }}>
          email@gmail.com
        </p>
        <p style={{ color: "#009AE7" }}>Business Hours</p>
        <p style={{ color: "rgb(177, 178, 178)" }}>
          8am-5pm Mountain Standard Time
        </p>
      </div>
      <div className="Contact_image"></div>
    </div>
  );
}

export default Contact;
