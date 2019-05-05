const express = require("express");
const getResponseString = require('../controllers/getResponse');
const middleware = require('../middlewares/validation')

let router = express.Router();

router.post('/signup', 
    middleware
, (req, res) => {
    res.send(getResponseString(req.body));
});

module.exports = router;
