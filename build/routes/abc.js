'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = process.env.NODE_ENV;
var domain = env === 'production' ? 'https://question-bank-sakivks.herokuapp.com' : env === 'development' ? 'https://question-bank-sakivks.herokuapp.com' : void 0;

var config = {
  domain: domain,
  fbAuth: {
    appId: '1479299782103978',
    appSecret: 'e1b0659b90ff97838c2e466c1fef6163',
    redirectURI: domain + '/fbAuthRedirect',
    scope: 'public_profile,email,user_friends,user_birthday,user_about_me,read_custom_friendlists'
  }
};

console.log(domain);
exports.default = config;