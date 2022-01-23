import "../styles/Yourself.css";
let nodemailer = require("nodemailer");

const submit = () => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "alexraia4@gmail.com",
      pass: "PowerStars52%",
    },
  });

  var mailOptions = {
    from: "youremail@gmail.com",
    to: "alexraia4@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  console.log("derp");
};

function Want() {
  return (
    <div className="Want">
      <p>Tell us about yourself</p>
      <p>What product do you want to source?</p>
      <textarea />
      <p>Do you have an Amazon or Alibaba link?</p>
      <textarea />
      <p>How soon do you need samples?</p>
      <textarea />
      <hr />
      <p>Full Name</p>
      <textarea />
      <p>Email</p>
      <textarea />
      <p>Phone Number</p>
      <textarea />
      <div>
        <input type="checkBox" />
        <p>Text</p>
        <input type="checkBox" />
        <p>Call</p>
        <input type="checkBox" />
        <p>Email</p>
      </div>
      <p onClick={submit}>Submit</p>
    </div>
  );
}

export default Want;
