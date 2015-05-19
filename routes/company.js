var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Company = require('../models/company.js');

/* GET /company listing. */
router.get('/', function(req, res, next) {
  Company.find(function (err, companies) {
    if (err) return next(err);
    res.json(companies);
  });
});

/* POST /company */
router.post('/', function(req, res, next) {
  Company.create(req.body, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* GET /company/id */
router.get('/:id', function(req, res, next) {
  Company.findById(req.params.id, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* PUT /company/:id */
router.put('/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

/* DELETE /company/:id */
router.delete('/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function (err, company) {
    if (err) return next(err);
    res.json(company);
  });
});

module.exports = router;