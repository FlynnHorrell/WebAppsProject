// var GuitarString = require("./guitarString");

define(function(){
var guitar, proto;

	function makeNewGuitar(guitarStrings, useSharps){
	var theGuitar;
	theGuitar = Object.create(proto);
	// Holds an array of guitarStrings
	theGuitar.strings = guitarStrings;
	// Object with all possible notes and values 
	theGuitar.noteList = {
		C1: 1,	CS1: 2,	Db1: 2,D1: 3,DS1: 4,Eb1: 4,E1: 5,F1: 6,FS1: 7,Gb1: 7,G1: 8,GS1: 9,Ab1: 9,A1: 10,AS1: 11,Bb1: 11,B1: 12,	
		C2: 13,	CS2: 14,Db2: 14,D2: 15,DS2: 16,Eb2: 16,E2: 17,F2: 18,FS2: 19,Gb2: 19,G2: 20,GS2: 21,Ab2: 21,A2: 22,AS2: 23,Bb2: 23,B2: 24,	
		C3: 25,	CS3: 26,Db3: 26,D3: 27,DS3: 28,Eb3: 28,E3: 29,F3: 30,FS3: 31,Gb3: 31,G3: 32,GS3: 33,Ab3: 33,A3: 34,AS3: 35,Bb3: 35,B3: 36,
		C4: 37,	CS4: 38,Db4: 38,D4: 39,DS4: 40,Eb4: 40,E4: 41,F4: 42,FS4: 43,Gb4: 43,G4: 44,GS4: 45,Ab4: 45,A4: 46,AS4: 47,Bb4: 47,B4: 48,
		C5: 49,	CS5: 50,Db5: 50,D5: 51,DS5: 52,Eb5: 52,E5: 53,F5: 54,FS5: 55,Gb5: 55,G5: 56,GS5: 57,Ab5: 57,A5: 58,AS5: 59,Bb5: 59,B5: 60,		
	}
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
				possibleRoots[possibleRoots.length] = notes[i] + octaves[i];
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
	// This should give all the other notes as possible roots. Used for chord inversions
	calculateAltRoots: function calculateAltRoots(){
		// call calculateChordRoot and give array of all other notes
	},
	//Calculates the musical interval in semitones between two notes
	calculateInterval: function calculateInterval(note1, note2){
		console.log(note1 + ": " + note2)
		return this.noteList[note2] - this.noteList[note1];
	},
	calculateChord: function calculateChord(root){
		// roots is an array of root Notes to base the chord on
		// calculateInterval between root and allNotes and store in array
		var intervals = [];
		var root = root;
		var notes = this.allNotes();
		//for(var i = 0;i < roots.length; i += 1){
			for(var j = 0; j < notes.length; j += 1){
					//intervals.push(this.calculateInterval(roots[i],notes[j] + this.strings[j].getOctave()));
					intervals.push(this.calculateInterval(root[0],notes[j] + this.strings[j].getOctave()));
			}
		//}
		console.log("intervals", intervals);
		// Clean up intervals by removing NaN and unison notes 
		for(var i = intervals.length-1; i >=0; i -=1){
			if(Number.isNaN(intervals[i]) || intervals[i]%12 === 0 || intervals[i] === 0){
				intervals.splice(i,1);
			}
		}
		//  Ascending sort
		intervals.sort(function(a,b){return a - b})
		console.log("intervals", intervals);
		// use the array and lookup combo of its intervals to determine chord
		// return array of chord names
		return this.chords(intervals,root);
	},
	//Uses the semitone intervals to make chord names
	//Note root is currently an array even though we are currently only using one root 
	chords: function chords(intervals,root){
		//For loop to go through all root notes and create an array of names

		//Name is the chord name which will be concatenated to.
		var name = "" + root[0];
		name = name.replace(/\d/, ""); //eliminate the octave number because that is not part of the name
		//Check for power chord first
			if(intervals.length === 1 & intervals[0] === 7){
				name += " Power Chord";
			}
		//Build an alternate interval array containing all intervals in lowest form ex. 17 semitones becomes 5 semitones
		//Do this by %12
		var altIntervals = [];
		for(var i = 0; i < intervals.length; i += 1){
			altIntervals.push(intervals[i]%12);
		}
		console.log("altIntervals", altIntervals);
		//Check for triads to start building a chord
		//only two spots in array since root notes are left out
		/*
		var triad = intervals.slice(0,2);
		console.log("triad", triad);
			switch(triad){
				case [4,7]: name += " Major";break;
				case [3,7]: name += " Minor";break;
			}
		*/
		//If no suitable names were found then name was unchanged 
		if(name === root[0].replace(/\d/,"")){
			return "?";
		}
		return name;
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
