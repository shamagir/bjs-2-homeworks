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

	#p;

	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.perimetr = this.getPerimeter();
		this.area = this.getArea();
		this.checkTriangle();
	}

	getPerimeter() {
			return this.perimetr = this.a + this.b +this.c;
	}

	getArea() {
		this.#p = this.perimetr / 2;
		this.area = Math.sqrt(this.#p * (this.#p - this.a) * (this.#p - this.b) * (this.#p - this.c));
		this.area = Number(this.area.toFixed(3));
		
		return this.area
	}

	checkTriangle() {
		if(isNaN(this.a) || isNaN(this.b) && isNaN(this.c) || this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		return this;
	}
}

function getTriangle(a, b, c) {
	try{
		return triangle =  new Triangle(a, b, c);
	} catch {
		class pseudoTriangele {
			getPerimeter() {
				return this.perimetr = 'Ошибка! Треугольник не существует';
			}

			getArea() {
				return this.area = 'Ошибка! Треугольник не существует';
			}
		}
		return triangle =  new pseudoTriangele();
	}
}

triangle = getTriangle(1,3,100)

console.log(triangle);