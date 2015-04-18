define(function(){
	var theStrings = []; // an array to hold the strings
	var theFrets = [];
	function makeDrawing(){
	// Uses svg.js to draw the fretboard ans strings
	var draw = SVG("drawing").size(533, 104);
	draw.click(function(){
		selectString(theStrings.dataset.string);
	});
	var rect = draw.rect(533, 104).fill({ color: '#000000' });
	// draw the strings
	theStrings = [
	draw.line(0, 4, 50, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 50, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 50, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 50, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 50, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 50, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 99, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 99, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 99, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 99, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 99, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 99, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 147, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 147, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 147, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 147, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 147, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 147, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 194, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 194, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 194, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 194, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 194, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 194, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 240, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 240, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 240, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 240, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 240, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 240, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 285, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 285, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 285, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 285, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 285, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 285, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 328, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 328, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 328, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 328, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 328, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 328, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 371, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 371, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 371, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 371, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 371, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 371, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 413, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 413, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 413, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 413, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 413, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 413, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 454, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 454, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 454, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 454, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 454, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 454, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 494, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 494, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 494, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 494, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 494, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 494, 100).stroke({ color: '#c0c0c0', width: 2 }),

	draw.line(0, 4, 533, 4).stroke({color: '#808080', width: 2 }),
	draw.line(0, 22, 533, 22).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 42, 533, 42).stroke({ color: '#808080', width: 2 }),
	draw.line(0, 62, 533, 62).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 82, 533, 82).stroke({ color: '#a0a0a0', width: 2 }),
	draw.line(0, 100, 533, 100).stroke({ color: '#c0c0c0', width: 2 })
	]
    
    theFrets = [
	draw.line(50, 0, 50, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(99, 0, 99, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(147, 0, 147, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(194, 0, 194, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(240, 0, 240, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(285, 0, 285, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(328, 0, 328, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(371, 0, 371, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(413, 0, 413, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(454, 0, 454, 104).stroke({ color: '#e0e0e0', width: 3 }),
	draw.line(494, 0, 494, 104).stroke({ color: '#e0e0e0', width: 3 })
	]
    return {strings: theStrings, frets: theFrets};
}
/*	var o = {
		a: theStrings,
		b: theFrets,
		c: makeDrawing
	};*/
    return makeDrawing;
});