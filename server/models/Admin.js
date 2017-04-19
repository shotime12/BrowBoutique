var mongoose = require('mongoose')

var AdminSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
}, {timestamps: true})

mongoose.model('Admin', AdminSchema)