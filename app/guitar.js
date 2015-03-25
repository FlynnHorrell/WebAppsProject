// var GuitarString = require("./guitarString");

define(function(){
var guitar, proto;

	function makeNewGuitar(guitarStrings, useSharps){
	var theGuitar;
	theGuitar = Object.create(proto);
	// Holds an array of guitarStrings
	theGuitar.strings = guitarStrings;
	return theGuitar;
	}

proto = {
	allNotes: function allNotes(){
		var notes = [];
		for(var i = 0;i<this.strings.length;i+=1){
			notes[i] = this.strings[i].getOpenNote();
		}
		return notes;
	},
	calculateChord: function calculateChord(){
		
	}
};	

guitar = {
	new: makeNewGuitar
};

Object.defineProperty(guitar, "protoype", {
	value: proto,
	writeable: false
});
return guitar;
});