var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router()
var path = require('path')
var _ = require('underscore')
var LocalStorage = require('node-localstorage').LocalStorage;
var sessionStorage = require('sessionstorage');
localStorage = new LocalStorage('./scratch');


