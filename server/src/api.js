const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression')
const express = require('express');
const bodyParser = require('body-parser');
const api = express();


const session = require("express-session");
const MongoStore = require('connect-mongo')(session);

const db = require('./db');
const passport = require('./passport');
const authRouter = require('./routes/auth.router');

const PROD = process.env.NODE_ENV === 'production';
const SESSION_SECRET = process.env.SESSION_SECRET || 'Terrible_Session_Secret';

api.use(helmet());

api.options('*', cors());
api.use(cors({
    origin: PROD ? '*' : /localhost/,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowHeaders: [
      "Authorization",
      "Accept",
      "Content-Type",
      "DNT",
      "Viewport-Width",
      "Width"
    ]
}));

api.use(session({
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

api.use(passport.initialize());
api.use(passport.session());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));

if (PROD) {
    api.use(compression());    
}

api.use('/auth', authRouter);

api.use((err, req, res, next) => {
  console.error(`>>>> error handler\n\n${err}\n\n>>>> error handler`);
  return res.json({error: err.message})
})

module.exports = api;