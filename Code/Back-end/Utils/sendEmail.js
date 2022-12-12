const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'chaimaaet2001@gmail.com',
        pass: 'rfiyjbohacwqshwz'
    }
});

// for verified email
const sendEmail = (user) => {
    const mailOptions = {
        from: ' "Verify your email" chaimaaet2001@gmail.com',
        to: user.email,
        subject: 'Verify your email',
        html: `<h2> ${user.name}! thanks for registering on our site</h2>
                <h4> please verify your mail to continue ... </h4>
                <a href="http://localhost:8081/api/auth/verify_email/${user.emailToken}"> Verify your Email</a>`
    };

    try {
        transporter.sendMail(mailOptions)
        // res.message = 'verification email is sent to your gmail account'
        console.log("verification is sent to your email, go to verification and click the button below to login")
    } catch (error) {
        return error.message || 'error'
    }
};

// for forget password

const forgetPassword = (user) => {
    const mailOptions = {
        from: ' "Verify your email" chaimaaet2001@gmail.com',
        to: user.email,
        subject: 'Account Activation link',
        html: `<h4> please click on given link to reset your password </h4>
            <a href="http://localhost:9090/api/auth/forgetPassword/${user.emailToken}" >click to reset password</a>`
    };
    try {
        transporter.sendMail(mailOptions)
        console.log('the link to reset password is sent to your gmail account')

    } catch (error) {
        return error.err || 'error'
    }
};


module.exports = { sendEmail, forgetPassword }
