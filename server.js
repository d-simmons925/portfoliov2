const express = require("express");
const path = require("path");
const config = require("config");
// const sslRedirect = require("heroku-ssl-redirect");
const app = express();
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const API_KEY = process.env.API_KEY || config.get("API_KEY");
const DOMAIN = process.env.DOMAIN || config.get("DOMAIN");

// app.use(sslRedirect(["production"]));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mg = new Mailgun(formData);
const client = mg.client({
  username: "api",
  key: API_KEY,
});

app.post("/email", (req, res) => {
  const output = `
  <p> You have a new contact request </p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  const messageData = {
    from: "Simmons Web Solutions <dwsimms925@gmail.com>",
    to: "dwsimms925@gmail.com",
    subject: "You Have a New Request!",
    html: output,
  };

  client.messages
    .create(DOMAIN, messageData)
    .then((res) => {
      // return res.status(200).json({ msg: "Message Sent!", type: "success" });
      console.log(res);
    })
    .catch((err) => {
      // return res
      //   .status(400)
      //   .json({ msg: "Error! Messge Not Sent", type: "error" });
      console.log(err);
    });

  return res.status(200).json({ msg: "Message Sent!", type: "success" });
});

app.get("/email", (req, res) => {
  return res.status(400).json({
    msg: "you must submit a form to access this route!",
    type: "error",
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
