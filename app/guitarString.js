 define(function(){
var GuitarString, proto;

function makeNewString(note, octave, useSharps){
	var gString;
	gString = Object.create(proto);
	// change these to object.defineProperty
	// note is a string representing the note like "A"
	// S is used for sharps so "AS" = A#
	// b is used for flats so "Ab" = A flat
	gString.openNote = note;
	gString.openOctave = octave;
	gString.currOctave = octave;
	// Keeps track which fret is selected, null is for unused, 0 is open string
	gString.fret = 0;
	// Call a proto function to set up frets for the array
	gString.currNote = note;
	// useSharps is a boolean to determine whether to display sharps or flats
	gString.useSharps = useSharps;
	return gString;
}

proto = {
	getOpenNote: function getOpenNote(){
		return this.openNote;
	},
	getCurrentNote: function getCurrentNote(){
		/* returns the current note value of a string
		   if not clicked, returns the open note */
		return this.currNote;
	},
	getOctave: function getOctave(){
		// returns the octave of the string object
		return this.currOctave;
	},
	getFret: function getFret(){
		return this.fret;
		/* returns an int from 1-12 depending on which 'fret'
           the string has been clicked at */
	},
	setFret: function setFret(fret){
		this.fret = fret;
		//console.log("Inside setFret: Fret = ", this.fret);
		this.calculateNote();
		return fret;
	},
	calculateNote: function calculateNote(){
		//console.log("Inside calculateNote openNote = ", this.openNote);
		//console.log(this.lookupNote(this.openNote));
		//console.log("Inside calculateNote this.fret = ", this.fret);
		// console.log("Inside calculateNote this.lookupNote(this.openNote)+this.fret = ", this.lookupNote(this.openNote) + this.fret);
		var tempNote = (this.lookupNote(this.openNote) + this.fret) % 12;
		//console.log("Inside calculateNote tempNote = ", tempNote);
		if (tempNote === 0){
			tempNote = 12;
		}
		if (this.fret === -1){
			// if the fret is -1, the string is not being used
			this.currNote = null;
			this.currOctave = null;
		}else {
			// otherwise, calculate normally
			var j = this.lookupNote(this.openNote)+ this.fret;
			var count = 0;
			while(j > 12){
				count += 1;
				j = j-12;
			}
			this.currOctave = this.openOctave+count;
			this.currNote = this.lookupNum(tempNote);
		}
	
		return this.currNote;
	},
	lookupNote: function lookupNote(note){
		var noteToNum = {
		C: 1,
		CS: 2,
		Db: 2,
		D: 3,
		DS: 4,
		Eb: 4,
		E: 5,
		F: 6,
		FS: 7,
		Gb: 7,
		G: 8,
		GS: 9,
		Ab: 9,
		A: 10,
		AS: 11,
		Bb: 11,
		B: 12
	    };
		return noteToNum[ note ];
	},
	lookupNum: function lookupNum(num){
		var numToNoteSharp = {
		1: "C",
		2: "CS",
		3: "D",
		4: "DS",
		5: "E",
		6: "F",
		7: "FS",
		8: "G",
		9: "GS",
		10: "A",
		11: "A#",
		12: "B"
		};
		var numToNoteFlat = {
		1: "C",
		2: "Db",
		3: "D",
		4: "Eb",
		5: "E",
		6: "F",
		7: "Gb",
		8: "G",
		9: "Ab",
		10: "A",
		11: "Bb",
		12: "B"
		};
		if (this.useSharps){
			return numToNoteSharp[ num ];
		}
		return numToNoteFlat[ num ];
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
