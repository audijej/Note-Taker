// var noteData = require("../db/db.json");
// var db = "./db/db.json";
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// const render = require("../notes.html");


// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "note.html");


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {

        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            res.send(JSON.parse(data));

            console.log("This is newer" + JSON.stringify(data));
        });

    });




    // Create New Characters - takes in JSON input
    app.post("/api/notes", function (req, res) {

        let noteId = uuidv4();
        let newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: noteId
        };

        console.log("These are the new" + JSON.stringify(newNotes));

        // res.json(noteData)


        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;

            let moreNotes = [];

            moreNotes.push(newNotes);

            console.log("This is new" + JSON.stringify(moreNotes));


            fs.writeFileSync("./db/db.json", JSON.stringify(moreNotes), function (err) {
                if (err) throw err;
                res.send(JSON.stringify(moreNotes));

                console.log("create more notes!" + moreNotes)
            });
        });

        
    });
};

// function generateHtml(){
//     fs.writeFileSync(outputPath, render(noteData), "utf-8")
// } 

// generateHtml()
// console.log(noteData);