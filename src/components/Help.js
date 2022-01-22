import "../styles/Help.css";

function Help() {
  return (
    <div className="Help">
      <div className="Help_box">
        <p
          style={{
            color: "#009AE7",
            fontSize: "3vw",
            marginBottom: "2vh",
          }}
        >
          Need help sourcing your products?
        </p>
        <p
          style={{
            color: "rgb(177, 178, 178)",
            fontSize: "1vw",
            marginBottom: "2vh",
          }}
        >
          Tell us about what you need and we'll let you know how we can help.
        </p>
        <div className="Help_get_started">
          <p>Get Started ↓</p>
        </div>
      </div>
      <div className="Help_box">
        <p style={{ color: "#009AE7", fontSize: "2vw" }}>Contact Us</p>
        <p style={{ color: "rgb(177, 178, 178)", marginBottom: "1vh" }}>
          Text, email, or call us
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
    </div>
  );
}

export default Help;
