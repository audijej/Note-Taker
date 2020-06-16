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

            let moreNotes = JSON.parse(data);

            moreNotes.push(newNotes);

            console.log("This is new" + JSON.stringify(moreNotes));


            fs.writeFile("./db/db.json", JSON.stringify(moreNotes), function (err) {
                if (err) throw err;
                res.send(moreNotes);

                console.log("create more notes!" + JSON.stringify(moreNotes))
            });
        });

        
    });
////////////////////////////////////////////////////////////////////
    app.delete("/api/notes/:id", function (req, res) {

        let deleter = req.params.id;

        fs.readFile("./db/db.json", "utf8", function (err, data) {
            if (err) throw err;
            let deleteMore = JSON.parse(data);

            let updatedNoteData = deleteMore.filter(note => note.id != deleter);

            fs.writeFile("./db/db.json", JSON.stringify(updatedNoteData), function (err) {
                if (err) throw err;
                res.send(updatedNoteData);
            });
        });
    })

        
};

// function generateHtml(){
//     fs.writeFileSync(outputPath, render(noteData), "utf-8")
// } 

// generateHtml()
// console.log(noteData);