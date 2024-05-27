const nodemailer = require("nodemailer");

const sendMail = async(req,res) => {
    //connect with smtp server
    const transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: 'antoinette.cruickshank@ethereal.email',
            pass: 'Rbk7BvjyPNnA1e6jdt'
        },
      });

      let info = await transport.sendMail({
        from: '"Biraj KC👻" <antoinette.cruickshank@ethereal.email>', // sender address
        to: "biraj.kcr7@gmail.com", // list of receivers
        subject: "Hello Biraj broo", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      })

    console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports ={sendMail};