// JS Check
// console.log('it works');

// Declaration 
let btn = document.querySelector('#button');
let newName = document.querySelector('#name');
let newAge = document.querySelector('#age');
let examCheck = document.querySelector('#examCheck');
let result = document.querySelector('#result');

// Declaration Class
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }

    write() {
        let item = document.createElement('li');
        if (examCheck.checked == true) {
            item.innerText = `${this.name} is ${this.age} years old.\n`
            item.style.color = 'red';
            result.appendChild(item);
        } else {
            item.innerText = `${this.name} is ${this.age} years old.\n`
            result.appendChild(item);
        }
    }   
};

btn.addEventListener('click', (event) => {
    event.preventDefault();
    let newPerson = new Person(newName.value, newAge.value);
    newPerson.info();
    newPerson.write();
});