var noteData = require("../db/db.json");
var db = "./db/db.json";
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
// const render = require("../notes.html");


// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "note.html");


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.send(db)
    });

    // fs.readFile(db, "utf8", function (err, data) {
    //     if (err) throw err;

    //     console.log("This is new" + data);
    // });


    // Create New Characters - takes in JSON input
    app.post("/api/notes", function (req, res) {

        let noteId = uuidv4();
        let newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: noteId
        };

        console.log("These are the new" + JSON.stringify(newNotes));

        res.json(noteData)


        fs.readFile(db, "utf8", function (err, data) {
            if (err) throw err;

            let moreNotes = data;

            moreNotes.push(newNotes);

            console.log("This is new" + data);
            console.log("Some new notes: " + JSON.stringify(moreNotes));


            fs.writeFile(db, "utf8", function (err, data) {
                if (err) throw err;
                res.send(db);
                console.log("create more notes!" + data)
            });
        });

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newData = req.body;

        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html

        // newData.routeName = newData.name.replace(/\s+/g, "").toLowerCase();

        console.log(newData);

        noteData.push(newData);

        res.json(newData);
    });
};

// function generateHtml(){
//     fs.writeFileSync(outputPath, render(noteData), "utf-8")
// } 

// generateHtml()
// console.log(noteData);