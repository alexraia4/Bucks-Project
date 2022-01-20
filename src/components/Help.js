import "../styles/Help.css";

function Help() {
  return (
    <div className="Help">
      <div className="Help_box">
        <p
          style={{
            color: "#009AE7",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "2vw",
            marginBottom: "2vh",
          }}
        >
          Need help sourcing your products?
        </p>
        <p
          style={{
            color: "rgb(213, 215, 217)",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "1vw",
            marginBottom: "2vh",
          }}
        >
          Tell us about what you need and we'll let you know how we can help.
        </p>
        <div>
          <p>Get Started ↓</p>
        </div>
      </div>
      <div className="Help_box">
        <p style={{ color: "#009AE7" }}>Contact Us</p>
        <p>Text, email, or call us</p>
        <p>+1 938-583-1859</p>
        <p>email@gmail.com</p>
        <p>Business Hours</p>
        <p>8am-5pm Mountain Standard Time</p>
      </div>
    </div>
  );
}

export default Help;
