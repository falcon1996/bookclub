const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'dhruv.parashar@st.niituniversity.in',
        clientId: '1072275737304-nvn6jmu7fi0dqnrqvh7nlhf1mnde6k8c.apps.googleusercontent.com',
        clientSecret: '8MjFzc7AFl23v09SFFGPBD-w',
        refreshToken: '1/Yqc071tAMgYCkYa1kR7QcIjU1osALAypfZdIwm0emdc'
        
    }
})

var mailOptions = {
    from: 'Dhruv <dhruv.parashar@st.niituniversity.in>',
    to: 'dhruvparashar6@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}

transporter.sendMail(mailOptions, function (err, res) {
    if(err){
        console.log(err);
    } else {
        console.log('Email Sent');
    }
})
