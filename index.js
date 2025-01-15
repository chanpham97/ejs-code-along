const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"));

// Task 1: Set the view engine to EJS. 





// Task 2: Create a folder called views. Move home.ejs into views. 

app.get('/', (req, res) => {

  // Task 3: Create an object called data, with 3 properties
  // "name", with a name for your supermarket (String)
  // "open", with a boolean to show whether the store is open or not
  // "stock", an array with at least 3 items (Strings)






  // Task 4: return the response, have it render home.ejs with your data object. 






  // Continue Task 5 in home.ejs
});


app.listen();
