const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.static(__dirname)); 

app.get('/mail', async (req, res) => {
    mail();
});

app.listen(3000, () => {
  console.log(`Сервер запущен на порту 3000`);
});

function mail(){
    console.log('нажали кнопку')
    let transporter = nodemailer.createTransport({
        host: 'hostname',
        port: port,
        secure: false,
        auth: {
            user:"mail",
            pass: "password",
        },
    });
    
    let result = transporter.sendMail({
        from: 'mail',
        to: 'mail',
        subject: 'тема',
        text: 'текст'
    });
    console.log(result);
}