import "../styles/Works.css";

function Works() {
  return (
    <div className="Works">
      <p style={{ fontSize: "3vw" }}>How it works</p>
      <div className="Works_steps">
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">1</p>
          <p className="Works_steps_step_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">2</p>
          <p className="Works_steps_step_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">3</p>
          <p className="Works_steps_step_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
