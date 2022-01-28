require("dotenv").config();

const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const registerNewClient = (req, res) => {
  const {
    product,
    link,
    soon,
    fullname,
    email,
    phoneNumber,
    text,
    call,
    emailCheck,
  } = req.body;

  ////////////// NODE MAILER STUFF //////////////////////////////
  var nodemailer = require("nodemailer");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.EMAIL}`,
      pass: `${process.env.EMAIL_PASS}`,
    },
  });
  //info@productstreamline.com
  var mailOptions = {
    from: `${email}`,
    to: "alexraia4@gmail.com",
    subject: "THIS IS AN AUTOMATED EMAIL SENT FROM ALEX CORP",
    text: `What product do you want to source: ${product}, Do you have an Amazon or Alibaba link: ${link}, How soon do you need samples: ${soon}, Full Name: ${fullname}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  ///////////////////////////////////////////////////////////////

  res.sendStatus(200);
};;

const path = require("path");
app.use(express.json());
app.post("/", registerNewClient);

//has to be after routes
app.use(express.static(__dirname + "/../build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(3334, () => {
  console.log(`Listening on port 3334`);
});
