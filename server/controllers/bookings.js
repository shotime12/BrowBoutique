var mongoose = require('mongoose');
var Bookings = mongoose.model('Booking');

module.exports =  {
	index: function(req, res){
		Bookings.find({}).exec(function(err, doc){
			if (err){
				return res.json(err)
			}return res.json(doc)
		})
	},
	create: function(req, res){
		booking = new Bookings(req.body)
		booking.save(function(err, doc){
			if (err){
				return res.json(err)
			}
			return res.json(doc)
		})
	},
	
}
