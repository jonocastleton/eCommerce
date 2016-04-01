// ENVIRONMENT VARIABLES
module.exports = {

  sessionSecret: "productionSessionSecret",
     google: {
         clientID:"113830853810-um696ma96at85qgkuc3gbkvh7r4if299.apps.googleusercontent.com",
         clientSecret: "T108yNUqvF1l-u5CO6-Eqlpy", //first two come from console.developer.google.com
         callbackURL: "https://tranquil-basin-45601.herokuapp.com/auth/google/oauth2redirect" // change this
     }
};
