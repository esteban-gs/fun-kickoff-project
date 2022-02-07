const mongoose = require('mongoose');

const availabilitiesSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Types.ObjectId,
    ref: 'Profile'
  },
  from: {
    type: Date
  },
  to: {
    type: Date
  },
  to_day_of_week: {
    type: Number
  },
  from_day_of_week: {
    type: Number
  },
});

availabilitiesSchema.pre("save", function (next) {
  this.from_day_of_week = this.from.getDay();
  this.to_day_of_week = this.to.getDay();
  next()
})
module.exports = Availability = mongoose.model("availability", availabilitiesSchema)
