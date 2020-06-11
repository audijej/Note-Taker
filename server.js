var express = require("express");

var app = express();


// const path = require("path");
// const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "routes");
// const outputPath = path.join(OUTPUT_DIR, "notes.html");

let characters = [
    {
        name: "goku",
        role: "saiyin",
        age: 33,
    },

    {
        name: "gohan",
        role: "saiyin/human",
        age: 8
    }
]

var PORT = 8000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening to Port: " + PORT)
    console.log(characters);
});

