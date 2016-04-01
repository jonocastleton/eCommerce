// ENVIRONMENT VARIABLES
module.exports = {

  sessionSecret: "developmentSessionSecret", //whatever you want
  google: {
    clientID:"113830853810-um696ma96at85qgkuc3gbkvh7r4if299.apps.googleusercontent.com",
    clientSecret: "T108yNUqvF1l-u5CO6-Eqlpy", //first two come from console.developer.google.com
    callbackURL: "http://localhost:3000/auth/google/oauth2redirect" // you input this into console.developer.google.com
  }
};
