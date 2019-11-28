const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos/";
const getData = async (url, userId) => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        json.forEach(element => { return element.userId === userId ? console.log(
            'Title=> ', element.title
        ) : 'none' })
        //console.log(json);
    } catch (error) {
        console.log(error);
    }
};


getData(url, 5)
