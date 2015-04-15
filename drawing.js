define(function(){
	function makeDrawing(){
	// Uses svg.js to draw the fretboard ans strings
	var draw = SVG("drawing").size(104, 480);
	var rect = draw.rect(104, 480).fill({ color: '#000000' });
	// draw the strings
	var str1 = draw.line(0, 2, 480, 2).stroke({color: '#c0c0c0', width: 2 });
	var str2 = draw.line(0, 22, 480, 22).stroke({ color: '#c0c0c0', width: 2 });
	var str3 = draw.line(0, 42, 480, 42).stroke({ color: '#c0c0c0', width: 2 });
	var str4 = draw.line(0, 62, 480, 62).stroke({ color: '#c0c0c0', width: 2 });
	var str5 = draw.line(0, 82, 480, 82).stroke({ color: '#c0c0c0', width: 2 });
	var str6 = draw.line(0, 102, 480, 102).stroke({ color: '#c0c0c0', width: 2 });
	// draw the frets such that they gradually decrease in size
	var fret1 = draw.line(40, 0, 40, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret2 = draw.line(75.5, 0, 75.5, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret3 = draw.line(111, 0, 111, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret4 = draw.line(146.5, 0, 146.5, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret5 = draw.line(182, 0, 182, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret6 = draw.line(217.5, 0, 217.5, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret7 = draw.line(253, 0, 253, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret8 = draw.line(285.5, 0, 285.5, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret9 = draw.line(321, 0, 321, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret10 = draw.line(356.5, 0, 356.5, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret11 = draw.line(392, 0, 392, 104).stroke({ color: '#e0e0e0', width: 3});
    }
    drawing = {
        new: makeDrawing
    };
    return drawing;
});