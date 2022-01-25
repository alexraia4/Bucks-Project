const express = require("express");
const app = express();

////////////// NODE MAILER STUFF //////////////////////////////
// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "alexraia4@gmail.com",
//     pass: "PowerStars52%",
//   },
// });

// var mailOptions = {
//   from: "youremail@gmail.com",
//   to: "buckmcgettigan@gmail.com",
//   subject: "THIS IS AN AUTOMATED EMAIL SENT FROM ALEX CORP",
//   text: "FINAL TEST",
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });
///////////////////////////////////////////////////////////////

const registerNewClient = (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
}


const path = require("path");
app.use(express.json());
app.post('/', registerNewClient)

//has to be after routes
app.use(express.static(__dirname + "/../build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(3333, () => {
  console.log(`Listening on port 3333`);
});
