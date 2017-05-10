import express from 'express'
import mongodb_helper from '../data/mongodb_helper'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var mongod = new mongodb_helper() 
  res.render('index', { title: 'Express' });
});

module.exports = router;
