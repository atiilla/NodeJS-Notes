// npm install node-fetch
const fetch = require('node-fetch');

async function getUserById(userId) {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/');
    let main = await data.json();

    main.forEach(element => element.userId === userId ? console.log(element) : 'none') // filter by user id
}

getUserById(5); // get user by given an id to function
