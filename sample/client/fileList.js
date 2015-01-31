//You'll want to note our (sometimes gratuitous) use of jQuery and
//underscore.js. Meteor uses both libraries and makes them available
//for you.

//The session is "reactive" so changes made to the session will be
//reflected in templates
Session.setDefault("FileList", []);

//Helper are used by the named template - in this case look for {{files}}
//in the template fileList for usage
Template.fileList.helpers({
    files: function () {
        return Session.get("FileList");
    }
});

//Events for the template fileList: currently just clicks for the 2 buttons
Template.fileList.events({
    'click #saveFile': function(event) {
        event.preventDefault(); //We handle the click event ourselves
        
        var fileName = $("#fileName").val();
        var fileContents = $("#fileText").val();
        
        if (!fileName || !fileContents) {
            alert("You need to give both a file name and some text");
            return;
        }
        
        //Send request to the server - note we pass a function which will
        //get called asynchronously
        Meteor.call("saveFile", fileName, fileContents, function(error, result) {
            if (typeof error !== "undefined") {
                //Whoops - there was an error calling the server
                //(Note that there are much better ways to handle an error)
                alert("There was an error saving the file! " + error);
                return;
            }
            
            $("#lastServerResponse").text(new Date().toString());
            alert("File saved! (This is a demo, so click the Get File List button if you want the list refreshed.)");
        });
    },
    
    "click #getFiles": function(event) {
        event.preventDefault(); //We handle the click event ourselves
        
        //Send request to the server - note we pass a function which will
        //get called asynchronously
        Meteor.call("getFileList", function(error, result) {
            if (typeof error !== "undefined") {
                //Whoops - there was an error calling the server
                //(Note that there are much better ways to handle an error)
                alert("There was an error! " + error);
                return;
            }
            
            $("#lastServerResponse").text(new Date().toString());
            
            var serverFiles = [];
            _.each(result, function(element) {
                serverFiles.push(element);
            });
            
            Session.set("FileList", serverFiles);
        });
    }
});
