import "../styles/Thanks.css";

function Thanks() {
  return (
    <div className="Thanks">
      <div className="Thanks_text">
        <p style={{ color: "#009AE7", fontSize: "2vw" }}>Thanks!</p>
        <p style={{ color: "rgb(177, 178, 178)", marginBottom: "1vh" }}>
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
      <div className="Thanks_image"></div>
    </div>
  );
}

export default Thanks;
