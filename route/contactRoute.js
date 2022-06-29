const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let { name, email, message } = req.body;

  if (name.length === 0 || email.length === 0 || message.length === 0) {
    return res.json({
      msg: "Please Fill All The Fields",
    });
  }

  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: "mohamedamine.mannai@enit.utm.tn",
    subject: `Message from ${name}`,
    html: `
        <h3>Informations : </h3>
        <ul>
            <li>Name : ${name}</li>
            <li>E-mail : ${email}</li>
        </ul>
        <h3>Message : </h3>
        <p>${message}</p>
        `,
  };

  transporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields" });

      res.status(200).json({ msg: "Thank You For Contacting Mohamed Amine" });
    } catch (err) {
      if (err) return res.status(500).json({ msg: "Server Error !" });
    }
  });
});

module.exports = router;
