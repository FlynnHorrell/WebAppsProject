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
	// Keeps track which fret is selected, null is for unused, 0 is open string
	gString.fret = 0;
	// Call a proto function to set up frets for the array
	gString.currNote = note;
	//useSharps is a boolean to determine whether to display sharps or flats
	gString.useSharps = useSharps;
	return gString;
}

proto = {
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
	},
	setFret: function setFret(fret){
		this.fret = fret;
		this.calculateNote();
		return fret;
	},
	calculateNote: function calculateNote(){
		var tempNote = (this.lookupNote(this.openNote)+this.fret)%12;
		if (tempNote == 0){
			tempNote = 12;
		}
		this.currNote = this.lookupNum(tempNote);
		return this.currNote;
	},
	lookupNote: function lookupNote(note){
		var noteToNum = {
		A:1,
		AS:2,
		Bb:2,
		B:3,
		C:4,
		CS:5,
		Db:5,
		D:6,
		DS:7,
		Eb:7,
		E:8,
		F:9,
		FS:10,
		Gb:10,
		G:11,
		GS:12,
		Ab:12,
	    };
		return noteToNum[note];
	},
	lookupNum: function lookupNum(num){
		var numToNoteSharp = {
		1:"A",
		2: "AS",
		3:"B",
		4:"C",
		5:"CS",
		6:"D",
		7:"DS",
		8:"E",
		9:"F",
		10:"FS",
		11:"G",
		12:"GS",
		};
		var numToNoteFlat = {
		1:"A",
		2:"Bb",
		3:"B",
		4:"C",
		5:"Db",
		6:"D",
		7:"Eb",
		8:"E",
		9:"F",
		10:"Gb",
		11:"G",
		12:"Ab",
		};
		if(this.useSharps){
			return numToNoteSharp[num];
		}else{
		return numToNoteFlat[num];
		}
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
