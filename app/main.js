// Main file that loads things up.
// Called from require.js

require.config({
   // baseUrl is automatically set to the directory where this main.js file is.
   // Or we can set it in this config:
   baseUrl: "app",
   // This way one can call on jquery and libs directly
   paths: {
      "lib": "../lib",
      "jquery": "../lib/jquery-1.11.2",
       "svg": "../lib/svg",
       "drawing": "../drawing"
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   },
   waitSeconds: 15
});

// All other modules should be called through here
require([ "jquery", "guitarString", "controller", "guitar","svg","drawing"],
function($, guitarString, controller, guitar,svg) {
   $(function() {
      console.log("Page loaded!");
   });
   console.log("guitarString", guitarString);
   console.log("controller", controller);
   console.log("guitar", guitar);
   console.log("svg",svg);
   console.log("drawing", drawing);
   var string1 = guitarString.new("E", 4);
   var string2 = guitarString.new("B", 3);
   var string3 = guitarString.new("G", 3);
   var string4 = guitarString.new("D", 3);
   var string5 = guitarString.new("A", 2);
   var string6 = guitarString.new("E", 2);
   console.log(string1);
   $(function() {
   "use strict";
   // Create the specific controller object initialized to work with our page
   var guitar1 = guitar.new([ string1, string2, string3, string4, string5, string6 ], true);
   var cont1 = controller.new($("ul"), guitar1);
   console.log(cont1);
   console.log(cont1.el);
   });
});
