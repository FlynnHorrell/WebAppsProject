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
		var i, notes = [ ];
		for (i = 0; i < this.strings.length; i += 1){
			notes[ i ] = this.strings[ i ].getCurrentNote();
		}
		return notes;
	},allOctaves: function allOctaves(){
		var octaves = [];
		for(var i = 0;i<this.strings.length;i+=1){
			octaves[i] = this.strings[i].getOctave();
		}
		return octaves;
	},
	
	// Basic chords.  Lowest note is the root.
	calcChordRoot: function calcChordRoot(){
		// use all Octaves array to determine strings with lowest octaves
		console.log("calculateChordRoot called");
		var octaves = this.allOctaves();
		var notes = this.allNotes();
		var min = Number.MAX_VALUE
		//find lowest octave 
		console.log("allOctaves",octaves);
		for(var i = 0; i < octaves.length; i+=1){
			if(min > octaves[i] && octaves[i] !== null){
				min = octaves[i];
			}
		}
		//Grab the notes from strings who may have the root note (octave == min)
		var possibleRoots = [];
		for(var i = 0; i < octaves.length; i+=1){
			if(octaves[i] == min){
				possibleRoots[possibleRoots.length] = notes[i];
			}
		}

		// out of strings with lowest octave use the one at the bottom of the guitar
		var root = [];
		root[0] = possibleRoots[possibleRoots.length-1];

		// return as array even though it is one note because calculateChord takes array
		//console.log("Possible roots", possibleRoots);
		console.log("The root", root[0]);
		return root;
	},
	// This should give all the other notes as possible roots.
	calculateAltRoots: function calculateAltRoots(){
		// call calculateChordRoot and give array of all other notes
	},
	//Calculates the musical interval between two notes
	calculateInterval: function calculateInterval(note1, note2){
		return 1;
	},
	calculateChord: function calculateChord(roots){
		// roots is an array of root Notes to base the chord on
		// calculateInterval between root and allNotes and store in array
		var intervals = [];
		var notes = this.allNotes();
		for(var i = 0;i < roots.length; i += 1){
			for(var j = 0; j < notes.length; j += 1){
				if(notes[j] !== null){
					intervals.push(this.calculateInterval(roots[i],notes[j]));
				}
			}
		}
		console.log("intervals", intervals);
		// use the array and lookup combo of its intervals to determine chord
		// return array of chord names
		
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
