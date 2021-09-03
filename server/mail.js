// const mailer = require('nodemailer');
// // const { Hello } = require('./hello_template');
// // const { Thanks } = require('./thanks_template');

// const getEmailData = (to, name, template) => {
//   let data = null;

//   switch (template) {
//     case 'hello':
//       alert('Hello');
//       // data = {
//       //   from: 'John Ahn <jaewon@gmail.com>',
//       //   to,
//       //   subject: `Hello ${name}`,
//       //   html: Hello(),
//       // };
//       break;

//     case 'thanks':
//       alert('thanks');
//       // data = {
//       //   from: 'John Ahn <jaewon@gmail.com>',
//       //   to,
//       //   subject: `Hello ${name}`,
//       //   html: Thanks(),
//       // };
//       break;
//     default:
//       return data;
//   }
//   return data;
// };

// const sendEmail = (name, email, phone, message) => {
//   const smtpTransport = mailer.createTransport(
//     // { service: 'Gmail',
//     // auth: {
//     //   user: '',
//     //   pass: '',
//     // },
//     // }
//     {
//       host: 'smtp.ethereal.email',
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: 'graciela.prosacco@ethereal.email',
//         pass: 'wz65pzaAct4n1G2RyQ',
//       },
//     },
//     {
//       from: 'Mailer Test <graciela.prosacco@ethereal.email>',
//     },
//   );

//   const mail = getEmailData(name, email, phone, message);

//   smtpTransport.sendMail(mail, function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(' email sent successfully');
//     }
//     smtpTransport.close();
//   });
// };

// module.exports = { sendEmail };

// // const nodemailer = require('nodemailer');

// // const transporter = nodemailer.createTransport(
// //   {
// //     host: 'smtp.ethereal.email',
// //     port: 587,
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //       user: 'graciela.prosacco@ethereal.email',
// //       pass: 'wz65pzaAct4n1G2RyQ',
// //     },
// //   },
// //   {
// //     from: 'Mailer Test <graciela.prosacco@ethereal.email>',
// //   },
// // );

// // const mailer = (message) => {
// //   transporter.sendMail(message, (err, info) => {
// //     if (err) return console.log(err);
// //     console.log('Email sent: ', info);
// //   });
// // };

// // module.export = mailer;
