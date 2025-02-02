// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
	constructor(length, width, height) {
		this.length = length,
		this.width = width,
		this.height = height,
		this.volume = function () {
			return (this.length * this.width * this.height)
		}
		this.surfaceArea = function () {
			return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
		}
	}
}

var cuboid = new CuboidMaker(4, 5, 5)
//   Prototype Code
//   CuboidMaker.prototype.volume = function () {
//     return (this.length * this.width * this.height)
//   }
//   CuboidMaker.prototype.surfacearea = function () {
//     return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
//   var cuboid = new CuboidMaker(4,5,5)



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
	constructor(length, width, height){
		super(length, width, height)
	}
}

var cube = new CubeMaker(2, 2, 2)

console.log(cube.volume()); // 8 
console.log(cube.surfaceArea()); // 24