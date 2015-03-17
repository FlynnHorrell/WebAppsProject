 /* Controls the interaction between the page and an array of values
 */


/* global $ */

/*
 * Used to create a new "controller".
 * "element" needs to be a DOM or jQuery "ul" element.
 */

 var makeController = function(element, gString){
 	"use strict";
 	// el is a jquery object wrapping element
 	var el = $(element);
 	// strings is an array of guitar strings
 	strings = [];
 	// adds all the buttons
 	addButtons();
 	bindEvents();
 }

 function addButtons(){
 	// makes the necessary buttons that users can click on to make chords
 	  $("<input type='button' />").bind("click", function() {
          selectString();
      }).appendTo(el);
 }

 function selectString(ev){
	/* trigegers when the user clicks on a string on the page
	   changes the values of fret, currNote, and openOctave */
 }

 function unselectString(ev){
	// triggers if the user dblclicks on a string. It will set everything to their base values
 }

 function bindEvents() {
 	el.on("click", selectString);
 	el.on("dblclick", unselectString);
 }

 return {
 	el: element
 };

 // jQuery with function. This function runs when the page has finished
// loading. It gets everything started
//
// Normally this would have been on a different file.
$(function() {
   "use strict";

   // Create the specific controller object initialized to work with our page
   makeController($("#main ul"));
});