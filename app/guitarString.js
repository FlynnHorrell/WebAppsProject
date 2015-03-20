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
	},
	setFret: function setFret(fret){
		this.fret = fret;
		this.calculateNote();
		return fret;
	},
	calculateNote: function calculateNote(){
		this.currNote = this.lookupNum((this.lookupNote(this.openNote)+this.fret)%12);
		return this.currNote;
	},
	lookupNote: function lookupNote(note){
		var noteToNum = {};
		noteToNum.A= 1;
		noteToNum.AS = 2;
		noteToNum.Bb = 2;
		noteToNum.B = 3;
		noteToNum.C = 4;
		noteToNum.CS = 5;
		noteToNum.Db = 5;
		noteToNum.D = 6;
		noteToNum.DS = 7;
		noteToNum.Eb = 7;
		noteToNum.E = 8;
		noteToNum.F = 9;
		noteToNum.FS = 10;
		noteToNum.Gb = 10;
		noteToNum.G = 11;
		noteToNum.GS = 12;
		noteToNum.Ab = 12;
		return noteToNum[note];
	},
	lookupNum: function lookupNum(num){
		var numToNoteSharp = {};
		numToNoteSharp[1]= "A";
		numToNoteSharp[2] = "AS";
		numToNoteSharp[3] = "B";
		numToNoteSharp[4] = "C";
		numToNoteSharp[5] = "CS";
		numToNoteSharp[6] = "D";
		numToNoteSharp[7] = "DS";
		numToNoteSharp[8] = "E";
		numToNoteSharp[9] = "F";
		numToNoteSharp[10] = "FS";
		numToNoteSharp[11] = "G";
		numToNoteSharp[12] = "GS";
		var numToNoteFlat = {};
		numToNoteFlat[1]= "A";
		numToNoteFlat[2] = "Bb";
		numToNoteFlat[3] = "B";
		numToNoteFlat[4] = "C";
		numToNoteFlat[5] = "Db";
		numToNoteFlat[6] = "D";
		numToNoteFlat[7] = "Eb";
		numToNoteFlat[8] = "E";
		numToNoteFlat[9] = "F";
		numToNoteFlat[10] = "Gb";
		numToNoteFlat[11] = "G";
		numToNoteFlat[12] = "Ab";
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
