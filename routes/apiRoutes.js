var noteData = require("../db/db.json");
var db = "./db/db.json";
var fs = require("fs");

module.exports = function(app) {

    app.get("/api/notes", function(req, res){
        res.json(noteData)
    });

    fs.readFile(db, "utf8", function(err, data){
        if(err) throw err;

        console.log(data);
    })

// // Create New Characters - takes in JSON input
// app.post("/api/notes", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newCharacter = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newCharacter);
  
//     characters.push(newCharacter);
  
//     res.json(newCharacter);
//   });
};


  

console.log(noteData);