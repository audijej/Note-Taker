var noteData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res){
        res.json(noteData)
    });
}

console.log(noteData);