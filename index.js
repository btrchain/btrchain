const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const cors = require('cors')



app.use(cors());
app.use(express.json());

const client_id =
  "745934653430-o651653r3dt1nstknmklm4kj4ddo2sgi.apps.googleusercontent.com";
const client_secret = "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";
const redirect_uri = "https://developers.google.com/oauthplayground";
const refresh_token =
  "1//04dLAVCz7a-i6CgYIARAAGAQSNwF-L9IrdLlg37dkMhsauhuK-0_oqtUgXkXHvtaIIgnwGz-mOkb7PFqucQJrVycrPRw_Z_TbhFM";

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uri
);
oAuth2Client.setCredentials({ refresh_token: refresh_token });


// app.get('/',async(req,res)=>{
//   try {
//       res.status(200).send('hi')
//   } catch (error) {
//       res.status(500).json(error.message)
//   }
// })

app.post("/contactus", async (req, res) => {
   
    const { name, email, choseOption, mobile, text } = req.body;
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "btrchain.client@gmail.com",
          clientId: client_id,
          clientSecret: client_secret,
          refreshToken: refresh_token,
          accessToken: accessToken,
        },
      });
      const mailOption = {
        from: `client ${name}  <btrchain.client@gmail.com>`,
        to: "btrchain@gmail.com",
        subject: `${choseOption}`,
        html: `<h1> message: ${text} <br> releted:${choseOption} <br> email: ${email} <br> mobile: ${mobile} </h1>`,
      };
      const result = await transport.sendMail(mailOption);
      return res.status(202).json({ message: "We Contact You soon ...",result});
    } catch (error) {
      return res.status(500).json({ error });
    }
  });


  app.listen(5000,()=>{
      console.log('server runing ion 5000')
  })