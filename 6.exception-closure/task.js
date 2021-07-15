// Задача №1

function parseCount(argument) {
	let result = Number.parseInt(argument);
	if(isNaN(result)) {
		throw new Error("Невалидное значение");
	}
	return result;
}

function validateCount(argument) {
	try{
		return parseCount(argument);
	} catch(error) {
		return error;
	}
}

// Задача №2

class Triangle {
	constructor(a, b, c) {
		if(isNaN(a) || isNaN(b) && isNaN(c) || a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return this.a + this.b +this.c;
	}

	getArea() {
		let p = this.getPerimeter() / 2;
		this.area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		this.area = Number(this.area.toFixed(3));
		return this.area
	}
}

function getTriangle(a, b, c) {
	try{
		return new Triangle(a, b, c);
	} catch(error) {
		return {
			getPerimeter: () => 'Ошибка! Треугольник не существует',
			getArea:      () => 'Ошибка! Треугольник не существует'
		}
	}
}

triangle =  getTriangle(1, 3, 100);
console.log(triangle.getPerimeter());