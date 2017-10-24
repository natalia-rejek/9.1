// scripts.js

var 	a,
	h,
	triangleArea = getTriangleArea(10,15),
	triangle1Area = getTriangleArea(12, 15),
	triangle2Area = getTriangleArea(1, 15);

function getTriangleArea(a, h) {

	if ((a <= 0) || (h <= 0)) {
    		console.log('Nieprawid³owe dane');
	}
	return a*h/2;
}

console.log(getTriangleArea(10, 6));
console.log(triangleArea);
console.log(triangle1Area);
console.log(triangle2Area);