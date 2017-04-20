var mongoose = require('mongoose')
var Admins = mongoose.model('Admin')

module.exports = {
	index: function(req, res){
		Admins.find({}).exec(function(err, doc){
			if (err){
				return res.json(err)
			}return res.json(doc)
		})
	},
	create: function(req, res){
		admin = new Admin(req.body)
		admin.save(function(err, doc){
			if(err){
				return res.json(err)
			}return res.json(doc)
		})
	}
}