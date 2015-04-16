define(function(){
	function makeDrawing(){
	// Uses svg.js to draw the fretboard ans strings
	var draw = SVG("drawing").size(540, 104);
	var rect = draw.rect(540, 104).fill({ color: '#000000' });
	// draw the strings
	var str1 = draw.line(0, 2, 540, 2).stroke({color: '#c0c0c0', width: 2 });
	var str2 = draw.line(0, 22, 540, 22).stroke({ color: '#c0c0c0', width: 2 });
	var str3 = draw.line(0, 42, 540, 42).stroke({ color: '#c0c0c0', width: 2 });
	var str4 = draw.line(0, 62, 540, 62).stroke({ color: '#c0c0c0', width: 2 });
	var str5 = draw.line(0, 82, 540, 82).stroke({ color: '#c0c0c0', width: 2 });
	var str6 = draw.line(0, 102, 540, 102).stroke({ color: '#c0c0c0', width: 2 });
	// draw the frets such that they gradually decrease in size
	var fret1 = draw.line(50, 0, 50, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret2 = draw.line(99, 0, 99, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret3 = draw.line(148, 0, 148, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret4 = draw.line(197, 0, 197, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret5 = draw.line(246, 0, 246, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret6 = draw.line(295, 0, 295, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret7 = draw.line(344, 0, 344, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret8 = draw.line(393, 0, 393, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret9 = draw.line(442, 0, 442, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret10 = draw.line(491, 0, 491, 104).stroke({ color: '#e0e0e0', width: 3});
	var fret11 = draw.line(540, 0, 540, 104).stroke({ color: '#e0e0e0', width: 3});
    }
    drawing = {
        new: makeDrawing
    };
    drawing.new();
});