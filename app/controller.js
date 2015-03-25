 /* Controls the interaction between the page and an array of values
 */


/* global $ */

/*
 * Used to create a new "controller".
 * "element" needs to be a DOM or jQuery "ul" element.
 */
define(function(){
 var theController, proto;
 function makeNewController(element, guitar){
    "use strict";
    var cont = Object.create(proto);
    var i;
    cont.el = $(element);
    cont.guitar = guitar
    //cont.strings = gString;
    // el is a jquery object wrapping element
    // var el = $(element), strings;
    // strings is an array of guitar strings
    // strings = [];
    // adds all the buttons
    for (i = 0; i < cont.guitar.strings.length;i += 1){
        cont.addButtons(cont.guitar.strings[ i ], i);
    }
    cont.bindEvents();
    return cont;
 }
 proto = {

 addButtons:function addButtons(gString,numString){
 	// makes the necessary buttons that users can click on to make chords
 	console.log("addButtons Called");
    var that = this;
    var i = 0;
 	for(i; i < 13; i += 1){
 	  $("<input type='button' value = '" + i +  "'  />").addClass("fret"+i).addClass("guitarString" + numString).bind("click", function(i) {
          that.selectString(this);
      }).appendTo(this.el);
    }
    $("<br>").appendTo(this.el);
 },
 selectString: function selectString(ev){
	/* triggers when the user clicks on a string on the page
	   changes the values of fret, currNote, and openOctave */
     console.log("selectString called");
     console.log(ev);
     console.log($(ev).attr("class"));

     // testing
     this.guitar.strings[0].setFret(ev.value);
     console.log(this.guitar.strings[0].currNote);
    
     // display some indicator of where the string was selected
     // delete any old indicators
     // this.el.setFret(button.value);

 },
 unselectString: function unselectString(ev){
	// triggers if the user dblclicks on a string. It will set everything to their base values
    console.log("unselectString called");
 },
 bindEvents: function bindEvents() {
  this.el.on("dblclick", this.unselectString);
 }
};
 /*return {
 	el: element,
  strings: strings
 };*/
 theController = {
  new: makeNewController
 };
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
