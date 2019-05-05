const validator = require('validation-middleware');

middleware = validator({
    email: ['required', 'isEmail'],
    firstname: ['required'],
    lastname: ['required'],
    password: ['required']
});

module.exports = middleware;