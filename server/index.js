// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const mailer = require('./mailer');

// // const app = express();

// // const PORT = 3001;

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// // app.post('/', (req, res) => {
// //   const message = {
// //     to: req.body.email,
// //     subject: 'Congratulations! You are successfully registred on our site',
// //     text: 'Hello',
// //   };
// //   mailer(message);

// //   res.redirect('/');
// // });

// // app.get('/', (req, res) => {
// //   res.send('<h1>Running SERVER</h1>');
// // });

// // app.listen(PORT, () => console.log(`servier worker at http://localhost:${PORT}/`));

// const express = require('express');
// //const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');

// const { sendEmail } = require('./mailer');

// const PORT = 3001;

// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cookieParser());

// app.post('/api/sendMail', (req, res) => {
//   console.log(req.body);
//   sendEmail(req.body.email, req.body.name, 'hello');
// });

// app.listen(PORT, () => {
//   console.log('Server Running');
// });
