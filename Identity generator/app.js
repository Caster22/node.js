const fs = require('fs');

const gender = ['male', 'female'];
const firstNameMale = ['Thomas', 'Jerry', 'Maxwell', 'Claude', 'Conner', 'Michael', 'Lucius'];
const firstNameFemale = ['Shannon', 'Alexandria', 'Miranda', 'Angelle', 'Mary', 'Natalee', 'Malvina'];
const lastName = ['Clanner', 'Porter', 'MacCalen', 'Durslay', 'Jefferson', 'Kowalski', 'Ivanovic'];
const randomAge = () => {
    const min = 18;
    const max = 78;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomItem = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};


let ppl = [];
let pplObject = {};

for (let i = 0; i <= 19; i++) {
    const randomGender = randomItem(gender);
    pplObject = {
        gender: randomGender,
        name: randomGender === 'male' ? randomItem(firstNameMale) : randomItem(firstNameFemale),
        lastName: randomItem(lastName),
        age: randomAge(),
    };
    ppl.push(pplObject);
}

const peopleJSON = JSON.stringify(ppl);

fs.writeFile('people.json', peopleJSON, (err) => {
    if (err) {
        console.log('Something went wrong');
    } else {
        console.log('File has been successfully generated! Check people.json');
    }
});

