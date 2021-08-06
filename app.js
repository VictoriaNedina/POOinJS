// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1999);
    }
}

// const victoria = new Person('Victoria', 21);
// const raphael = new Person('Raphael', 07);

// console.log(victoria.age);

const victoria = new Person('Victoria', '10-31-1999');
console.log(victoria.calculateAge());