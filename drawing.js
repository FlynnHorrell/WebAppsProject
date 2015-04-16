define(function(){
	function makeDrawing(){
	// Uses svg.js to draw the fretboard ans strings
	var draw = SVG("drawing").size(533, 104);
	var rect = draw.rect(533, 104).fill({ color: '#000000' });
	// draw the strings
	var str1 = draw.line(0, 2, 533, 2).stroke({color: '#c0c0c0', width: 2 });
	var str2 = draw.line(0, 22, 533, 22).stroke({ color: '#c0c0c0', width: 2 });
	var str3 = draw.line(0, 42, 533, 42).stroke({ color: '#c0c0c0', width: 2 });
	var str4 = draw.line(0, 62, 533, 62).stroke({ color: '#c0c0c0', width: 2 });
	var str5 = draw.line(0, 82, 533, 82).stroke({ color: '#c0c0c0', width: 2 });
	var str6 = draw.line(0, 102, 533, 102).stroke({ color: '#c0c0c0', width: 2 });
	// draw the frets such that they gradually decrease in size
	var fret1 = draw.line(50, 0, 50, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret2 = draw.line(99, 0, 99, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret3 = draw.line(147, 0, 147, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret4 = draw.line(194, 0, 194, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret5 = draw.line(240, 0, 240, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret6 = draw.line(285, 0, 285, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret7 = draw.line(328, 0, 328, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret8 = draw.line(371, 0, 371, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret9 = draw.line(413, 0, 413, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret10 = draw.line(454, 0, 454, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret11 = draw.line(494, 0, 494, 104).stroke({ color: '#e0e0e0', width: 3});
    }
    drawing = {
        new: makeDrawing
    };
    drawing.new();
});