import "../styles/Contact.css";
import girl from "../images/girl_with_phone.png";

function Contact() {
  return (
    <div className="Contact">
      <div className="Contact_text">
        <p style={{ color: "#009AE7", fontSize: "2vw", marginBottom: "4%" }}>
          Feel free to contact us if you have any questions.
        </p>
        <p style={{ color: "rgb(177, 178, 178)", marginBottom: "1%" }}>
          +1 801-396-0039
        </p>
        <p style={{ color: "rgb(177, 178, 178)", marginBottom: "3vh" }}>
          info@productstreamline.com
        </p>
        <p style={{ color: "#009AE7", marginBottom: "1vh" }}>Business Hours</p>
        <p style={{ color: "rgb(177, 178, 178)" }}>
          8am-5pm Mountain Standard Time
        </p>
      </div>
      <img className="Contact_image" src={girl} />
    </div>
  );
}

export default Contact;
