import "../styles/Choose.css";
import guy from "../images/guy_with_stuff.png";

function Choose() {
  return (
    <div className="Choose">
      <div className="Choose_square_one">
        <img
          className="Yourself_image"
          src={guy}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="Choose_square_two">
        <div className="Choose_square_two_text">
          <p
            style={{
              color: "#009AE7",
              fontSize: "2vw",
              paddingTop: "5vh",
              paddingBottom: "5vh",
            }}
          >
            Why choose us?
          </p>
          <p
            style={{
              fontSize: "1.6vw",
              marginBottom: "1vh",
            }}
          >
            Fast
          </p>
          <p style={{ color: "rgb(177, 178, 178)", marginBottom: "4vh" }}>
            We get back to you within five an hour during business hours, and if
            you send us a message after hours, we will get back to you the next
            day.
          </p>
          <p
            style={{
              fontSize: "1.6vw",
              marginBottom: "1vh",
            }}
          >
            Simple
          </p>
          <p style={{ color: "rgb(177, 178, 178)", marginBottom: "4vh" }}>
            All transaction US based, so no international fees. Plus it’s simple
            and safe.
          </p>
          <p
            style={{
              fontSize: "1.6vw",
              marginBottom: "1vh",
            }}
          >
            Secure
          </p>
          <p style={{ color: "rgb(177, 178, 178)" }}>
            We spend the time trying to make sure we know exactly what you want
            so that our factories can cater to your specific customization. We
            take the time to order sample sets so you get what you order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
