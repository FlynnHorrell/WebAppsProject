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
    cont.bindEvents();
    return cont;
 }
 proto = {

 addButtons: function addButtons(numString){
     // makes the necessary buttons that users can click on to make chords
    console.log("addButtons Called");
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
    $("<input type='button' value='calculate chord' />").bind("click", function() {
            that.guitar.calculateChord(that.guitar.calcChordRoot())}).appendTo(this.el);
 },
 selectString: function selectString(ev){
	/* triggers when the user clicks on a string on the page
	   changes the values of fret, currNote, and openOctave */
     //console.log("selectString called");
     /*console.log(ev);
     console.log($(ev).attr("class"));*/
/*     var theFret = $(ev).attr("class").match(/\d+/)[0];
     theFret = parseInt(theFret);*/
     var theFret = $(ev).data("fret");
     var theString = $(ev).data("guitarString");
    // console.log("Fret", theFret);
    // console.log("StringNumber", theString);
    // console.log(this.guitar.allNotes());
     this.guitar.strings[ theString ].setFret(theFret);
    // console.log("Open Note", this.guitar.strings[ theString ] .getOpenNote());
     console.log("Current Note", this.guitar.strings[ theString ] .getCurrentNote());
     console.log("octave", this.guitar.strings[ theString ].getOctave());
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
