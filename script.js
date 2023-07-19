//complete this code
class Person {
	consrtuctor(name, age) {
		this.name = name;
		setAge(age);
	}
	getName() => this.name;
	setAge(age) => {this.age = age};

}

class Student extends Person {
	study() => {
		console.log(getName() + ' is studying');
	}
}

class Teacher extends Person {
	teach() => {
		console.log(getName() + ' is teachimg')
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
