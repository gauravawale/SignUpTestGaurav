let getResponseString = function(body) {
    if (body.subscribe) {
       return `Hello ${body.firstname} ${body.lastname}, thank you for signing up. Your account is now created. You would be recieving
        our periodic newslettrs to your email: ${body.email}`;
    }
    else {
        return `Hello ${body.firstname} ${body.lastname}, thank you for signing up. Your account is now created`;
    }
}

module.exports = getResponseString;