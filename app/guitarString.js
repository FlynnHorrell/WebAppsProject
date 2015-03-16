var proto;

function makeNewString(note,octave){
	var gString;
	gString = Object.create(proto);
	// change these to object.defineProperty
	gString.openNote = note;
	gString.openOctave = octave;
	//Keeps track which fret is selected, null is for unused 
	gString.fret = 0;
	// Call a proto function to set up frets for the array
	gString.currNote = note;
	return gString;
}

proto = {
	click: function click(){
		//set fret to whichever was clicked
		//calculate new current note
		//if already clicked then unselect it
	},
	isClicked: function isClicked(){
		return this.fret;
	},
	getCurrentNote: function getCurrentNote (){
		return this.currNote;
	},
	getOctave: function getOctave(){
		return this.openOctave
	},

}



