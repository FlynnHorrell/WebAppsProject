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
      // or the following to load remotely:
      // "jquery": "https://code.jquery.com/jquery-2.1.3.min"
   },
   waitSeconds: 15
});

// All other modules should be called through here
require([ "jquery", "guitarString", "controller", "guitar","svg","../drawing"],
function($, guitarString, controller, guitar, svg, drawing) {
   $(function() {
      console.log("Page loaded!");
   });
   console.log("guitarString", guitarString);
   console.log("controller", controller);
   console.log("guitar", guitar);
   console.log("svg",svg);
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
   var theFretboard = drawing();
   console.log(theFretboard);
   for (var i = 0; i < 71; i ++){
      if (i < 12){
          theFretboard.strings[i].data('string', string1);
       } else if (12 < i < 24){
         theFretboard.strings[i].data('string', string2);
       } else if (24 < i < 36){
         theFretboard.strings[i].data('string', string3);
       } else if (36 < i < 48){
         theFretboard.strings[i].data('string', string4);
       } else if (48 < i < 60){
         theFretboard.strings[i].data('string', string5);
       } else {
         theFretboard.strings[i].data('string', string6);
       }
   }
   var guitar1 = guitar.new([ string1, string2, string3, string4, string5, string6 ], true);
   var cont1 = controller.new($("ul"), guitar1);
   console.log(cont1);
   console.log(cont1.el);
   });
});
