filing-meteor-sample README
=================================

Introduction
----------------

This is just a quick little readme describing this sample app. All it really
does is show you a structured Meteor app with some very simple file writing
and enumeration. It uses both jQuery and underscore.js calls so that you can
see those in action (since you get them for free). It is also (kind of
chessily) formatted with Bootstrap so you can see that as well.

The actual application is in the sample folder. If you've installed meteor,
then you just need to change to that directory and run. Assuming that you're
currently in this directory:

    cd sample
    meteor
    
Directories in the directory 'sample'
-------------------------------------

 * client - Files here are only send to the client (web-browser). We include:
    - head.html - the HEAD section of the main HTML document
    - body.html - the BODY section of the main HTML document
    - style.css - CSS included as part of the main HMTL document
    - fileList.html - The HMTL template named fileList
    - fileList.js - The JavaScript that is executed as part of the fileList template
 * lib - Files are loaded before other folders and is on both the client and
   server. Currently there's nothing in it.
 * private - Files here are only accessible from the server (via the Assets
   API). Currently there's nothing in it.
 * public - Any files here can be accessed from the client statically, just like
   "regular" web resources. We currently include an image that we display on the
   main page as a demonstration
 * server - Files here are only run on the server. Currently that is just
   methods.js where we defined the server-side methods called by client/fileList.js
 * tests - Files here are included for neither the client nor the server. It is
   for unit testing, and is ***suspiciously*** empty.

There are also two special folders

 * .meteor - created and maintained by meteor: generally you shouldn't need
   to care about this folder
 * .uploads - we created this one ourselves. It's where created files go. It's
   a "hidden" file (dot-prefixed) so that meteor "know" it's not part of the
   project. Otherwise everytime you changed a file in this directory while
   debugging, meteor would reload the application to pick up the change.
   We currently have a few demo files pre-loaded so the Get File List button
   actually does something.
