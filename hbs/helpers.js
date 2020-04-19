const hbs = require('hbs');

hbs.registerHelper('getYear', () => new Date().getFullYear())
hbs.registerHelper('capitalized', (text) => {
    let words = text.split(' ')
    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1)
    });
    return words.join(' ')

})