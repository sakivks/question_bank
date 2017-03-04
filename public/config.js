const env = process.env.NODE_ENV;
const domain = do {
  if (env === 'production') ('https://question-bank-sakivks.herokuapp.com');
  else if (env === 'development') ('https://question-bank-sakivks.herokuapp.com');
  else ('https://question-bank-sakivks.herokuapp.com');
};

const config = {
  domain,
  fbAuth: {
    appId: '1479299782103978',
    appSecret: 'e1b0659b90ff97838c2e466c1fef6163',
    redirectURI: `${domain}/fbAuthRedirect`,
    scope: 'public_profile,email,user_friends',
  },
};

console.log(domain);
export { config as default };
