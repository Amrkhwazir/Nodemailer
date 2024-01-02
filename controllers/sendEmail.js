import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth: {
        user: 'nettie.walter73@ethereal.email',
        pass: '3G8Z1sk11z8c1Pzwzh'
    },
  });

export const sendMail = async (req, res) => {

    const info = await transporter.sendMail({
        from: '"Amir khan 👻" <amrkh5678@gmail.com>', // sender address
        to: "amrkh5678@gmail.com", // list of receivers
        subject: "Hello Amir ✔", // Subject line
        text: "welcome to the Email Amir khan", // plain text body
        html: "<b>welcome to the Email Amir khan</b>", // html body
      });
    

      console.log("Message sent: %s", info.messageId);
      res.json(info);
}