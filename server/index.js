require("dotenv").config();

const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const registerNewClient = (req, res) => {
  const {
    name,
    email,
    phoneNumber,
    text,
    call,
    emailCheck,
    product,
    link,
    comments,
  } = req.body;

  let textYN = "No";
  let callYN = "No";
  let emailYN = "No";

  if (text) {
    textYN = "Yes";
  }
  if (call) {
    callYN = "Yes";
  }
  if (emailCheck) {
    emailYN = "Yes";
  }

  //////////// NODE MAILER STUFF //////////////////////////////
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
    to: "info@productstreamline.com",
    subject: "THIS IS AN AUTOMATED EMAIL SENT FROM ALEX CORP",
    html: `Name: <b>${name}</b><br/>Email: <b>${email}</b><br/>Phone Number: <b>${phoneNumber}</b><br/>Allow Text: <b>${textYN}</b><br/>Allow Call: <b>${callYN}</b><br/>Allow Email: <b>${emailYN}</b><br/>Product That Needs Sourcing: <b>${product}</b><br/>Amazon or Alibaba Link: <b>${link}</b><br/>Additional Comments: <b>${comments}<b>`,
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
};

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
