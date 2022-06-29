// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
//         'X-RapidAPI-Key': 'cc6f64705bmshd57a55259570da3p1d7709jsn15f9f6bae71c'
//     }
// };

// fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
    params: { query: 'new york', locale: 'en_US', currency: 'USD' },
    headers: {
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
        'X-RapidAPI-Key': 'cc6f64705bmshd57a55259570da3p1d7709jsn15f9f6bae71c'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});