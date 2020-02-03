export const apiCall = () => fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes/10')
    .then(res => res.json())
    .then(res => res.stringify)
    