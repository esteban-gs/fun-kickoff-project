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
  toDayOfWeek: {
    type: Number
  },
  fromDayOfWeek: {
    type: Number
  },
});

availabilitiesSchema.pre("save", function (next) {
  this.fromDayOfWeek = this.from.getDay();
  this.toDayOfWeek = this.to.getDay();
  next()
})
module.exports = Availability = mongoose.model("availability", availabilitiesSchema)
