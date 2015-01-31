//Any imports we need here on the server
var fs = Npm.require('fs');

//Helper for file access - given a file name, returns the path to that file
//in our .uploads folder    
function fpath(fileName) {
    return process.env.PWD + '/.uploads/' + fileName;
};

//Logic that runs on the server and is callable from the client via Meteor.call
Meteor.methods({
    //Save the specified file to our upload directory
    saveFile: function(fileName, fileContents) {
        console.log("Server is saving " + fileName);
        fs.writeFileSync(fpath(fileName), fileContents, 'utf8');
    },
    
    //Return all files we currently have.
    //TODO: a real app wouldn't return the full contents of every file - that's just crazy
    getFileList: function() {
        console.log("Server asked for file list");
        return _.map(fs.readdirSync(fpath("")), function(fn) {
            var full = fpath(fn);
            return {
                fileName: fn,
                timestamp: fs.statSync(full).ctime,
                contents: fs.readFileSync(full, "utf8"),
            };
        });
    }
});
