// Main file that loads things up.
// Called from require.js

require.config({
   // baseUrl is automatically set to the directory where this main.js file is.
   // Or we can set it in this config:
   baseUrl: "app",
   // This way one can call on jquery and libs directly
   paths: {
      "lib": "../lib",
      "jquery": "../lib/jquery-1.11.2"
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   },
   waitSeconds: 15
});

// All other modules should be called through here
require(["jquery", "guitarString","controller"],
function($, guitarString, controller) {
   $(function() {
      console.log("Page loaded!");
   });
   console.log("guitarString", guitarString);
   console.log("controller", controller);
   var string1 = guitarString.new("E",0);
   console.log(string1);
   $(function() {
   "use strict";
   // Create the specific controller object initialized to work with our page
   var cont1 = controller.new($("#main ul"),string1);
   console.log(cont1);
   console.log(cont1.el);
   });
});
  
