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
    var i, cont = Object.create(proto);
    cont.el = $(element);
    cont.guitar = guitar;
    // cont.strings = gString;
    // el is a jquery object wrapping element
    // var el = $(element), strings;
    // strings is an array of guitar strings
    // strings = [];
    // adds all the buttons
    for (i = 0; i < cont.guitar.strings.length;i += 1){
        cont.addButtons(i);
    }
    cont.calcButton();
    return cont;
 }
 proto = {

 addButtons: function addButtons(numString){
     // makes the necessary buttons that users can click on to make chords
    var that = this;
    var i = -1;
    for (i; i < 13; i += 1){
        $("<input type='button' value = '" + i + "'/>").data("fret", i).data("guitarString", numString).bind("click", function() {
            that.selectString(this);
        }).appendTo(this.el);
    }
    $("<br>").appendTo(this.el);
 },
 calcButton: function calcButton(){
    var that = this;
    var chordsGoHere = $("<input type='text'/>").appendTo(this.el);
    $("<input type='button' value='calculate chord' />").bind("click", function() {
            chordsGoHere.attr("value",that.guitar.calculateChord());
        }).appendTo(this.el);

 },
 selectString: function selectString(ev){
	/* triggers when the user clicks on a string on the page
	   changes the values of fret, currNote, and openOctave */
     var theFret = $(ev).data("fret");
     var theString = $(ev).data("guitarString");
     $(ev).addClass("Selected");
     this.guitar.strings[ theString ].setFret(theFret);
     // display some indicator of where the string was selected
     // delete any old indicators
     // this.el.setFret(button.value);
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
