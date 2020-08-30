const Mailer =  require("nodemailer")

module.exports = {
  warn_cron_status: warn_cron_status
}

var transporter = Mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASSWORD
  }
})
function warn_cron_status(cron_status, text) {  
  const options = {
    from: process.env.ADMIN_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: 'MongoDB Storage Warning',
    text: text + " " + JSON.stringify(cron_status)
  }
  transporter.sendMail(options, function(err, data){
    if(err){
      console.log("MAIL : Email failed to send!")
      console.log(err)
    } else {
      console.log("MAIL : Email Sent!")
    }
  });
}