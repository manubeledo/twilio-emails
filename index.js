let nodemailer = require('nodemailer')

const email = 'mariana.bogisich26@ethereal.email'

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: email, // generated ethereal user
      pass: '32jSCnT8sXHHYJAFXk' // generated ethereal password
    },
});

(async () => {
    const options = {
        to: email,
        subject: 'partido de futbol',
        html: '<h1> Resultado del partido: 3-0 </h1>'
    }
    try{
        const respuesta = await transporter.sendMail(options)
        console.log(respuesta)
    }
    catch(err){
        console.log(err)
    }
})

