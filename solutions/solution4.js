/*
- Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
*/

let calcTriangelArea = function(a,b,c,units = 'inches'){
	var p = (a + b + c) / 2
	return 'About ' + Math.round(Math.sqrt(p * 2 * 3 * 4)) + ' ' +units
}

console.log(calcTriangelArea(5,6,7));