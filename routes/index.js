const express = require("express");
let router = express.Router();

router.get('/', (req, res) => {
     res.render('index', {
         title: 'Sign up'
     });
});

module.exports = router;