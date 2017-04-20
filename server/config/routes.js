var mongoose = require('mongoose')
var Bookings = require('../controllers/bookings.js')
var Admins = require('../controllers/admins.js')

module.exports = function(app){
	app.get('/bookings', Bookings.index),
	app.post('/booking', Bookings.create),
	app.get('/admin', Admins.create)
}