var mongoose = require('mongoose')

var BookingSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	comments: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	}
}, {timestamps: true})

mongoose.model('Booking', BookingSchema)