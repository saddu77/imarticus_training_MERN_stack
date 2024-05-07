const validator = require("validator");
console.log("URL is: " + validator.isURL("https://www.google.com"));
console.log("Email is:" + validator.isEmail("john@gmail.com"));