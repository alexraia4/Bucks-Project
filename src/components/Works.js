import "../styles/Works.css";

function Works() {
  return (
    <div className="Works">
      <p style={{ fontSize: "3vw" }}>How it works</p>
      <div className="Works_steps">
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">1</p>
          <p className="Works_steps_step_text">
            Give us a description of the product you want manufactured. You can
            send us a link to a similar product if there is one.
          </p>
        </div>
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">2</p>
          <p className="Works_steps_step_text">
            After we have your design we will reach out directly to a
            manufacturer and order samples as requested. Our goal is to make
            sure you get the product you envision.
          </p>
        </div>
        <div className="Works_steps_step">
          <p className="Works_steps_step_number">3</p>
          <p className="Works_steps_step_text">
            Once you have samples that meet the necessary standards we will
            start negotiating pricing to you get the best prices at the
            quantities you need. Lastly we place the order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
