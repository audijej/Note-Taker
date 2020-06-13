var path = require("path");



module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // app.get("/css/styles.css", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/css/styles.css"));
    // });
    
    
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    
}