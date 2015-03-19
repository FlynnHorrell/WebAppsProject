 /* Controls the interaction between the page and an array of values
 */


/* global $ */

/*
 * Used to create a new "controller".
 * "element" needs to be a DOM or jQuery "ul" element.
 */
define(function(){
 var theController, proto;
 function makeNewController(element, gString){
 	"use strict";
 	var cont = Object.create(proto);
 	cont.el = $(element);
 	cont.strings = gString;
 	// el is a jquery object wrapping element
 	// var el = $(element), strings;
 	// strings is an array of guitar strings
 	// strings = [];
 	// adds all the buttons
 	for (var i = 0; i <cont.strings.length;i+=1){
 	cont.addButtons(cont.strings[i]);
 	}
 	cont.bindEvents();
 	return cont;
 };
 proto = {
 addButtons:function addButtons(gString){
 	// makes the necessary buttons that users can click on to make chords
 	console.log("addButtons Called");
  var that = this;
 	for(var i = 0; i < 13; i += 1){
 	  $("<input type='button' />").bind("click", function() {
          that.selectString();
      }).appendTo(this.el);
    }
    $("<br>").appendTo(this.el);
    
 },
 selectString: function selectString(ev){
	/* trigegers when the user clicks on a string on the page
	   changes the values of fret, currNote, and openOctave */
     console.log("selectString called");


 },
 unselectString: function unselectString(ev){
	// triggers if the user dblclicks on a string. It will set everything to their base values
 },
 bindEvents: function bindEvents() {
 	this.el.on("click", this.selectString);
 	this.el.on("dblclick", this.unselectString);
 }
}
 /*return {
 	el: element,
 	strings: strings
 };*/
 theController = {
 	new: makeNewController
 }
return theController;
});
 // jQuery with function. This function runs when the page has finished
// loading. It gets everything started
//
// Normally this would have been on a different file.
/*$(function() {
   "use strict";
   // Create the specific controller object initialized to work with our page
   makeController($("#main ul"));
})*/
