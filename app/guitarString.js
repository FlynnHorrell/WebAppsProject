 define(function(){
var GuitarString, proto;

function makeNewString(note, octave){
	var gString;
	gString = Object.create(proto);
	// change these to object.defineProperty
	gString.openNote = note;
	gString.openOctave = octave;
	// Keeps track which fret is selected, null is for unused, 0 is open string
	gString.fret = 0;
	// Call a proto function to set up frets for the array
	gString.currNote = note;
	return gString;
}

proto = {
	click: function click(){
		// set fret to whichever was clicked
		// calculate new current note
		// if already clicked then unselect it
	},
	isClicked: function isClicked(){
		return this.fret !== null;
	},
	getCurrentNote: function getCurrentNote(){
		/* returns the current note value of a string
		   if not clicked, returns the open note */
		return this.currNote;
	},
	getOctave: function getOctave(){
		// returns the octave of the string object
		return this.openOctave;
	},
	getFret: function getFret(){
		return this.fret;
		/* returns an int from 1-12 depending on which 'fret'
           the string has been clicked at */
	}
	setFret: function setFret(fret){
		this.fret = fret;
		this.calculateNote();
		return fret;
	}
	calculateNote: function calculateNote(){
		

		return this.currNote;
	}

};

GuitarString = {
	new: makeNewString
};

Object.defineProperty(GuitarString, "protoype", {
	value: proto,
	writeable: false
});
return GuitarString;
});
 // module.exports = GuitarString;
