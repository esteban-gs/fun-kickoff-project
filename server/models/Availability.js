const mongoose = require('mongoose');


const time = new mongoose.Schema({
  hour: {
    type: Number,
    min: 0,
    max: 23
  },
  minute: {
    type: Number,
    min: 0,
    max: 60,
    default: 0
  },
})

const range = new mongoose.Schema({
  from: {
    type: time,
  },
  to: {
    type: time,
  }
});

const availabilitiesSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Types.ObjectId,
    ref: 'Profile'
  },
  monday: {
    type: range,
  },
  tuesday: {
    type: range,
  },
  wednesday: {
    type: range,
  },
  thursday: {
    type: range,
  },
  friday: {
    type: range,
  },
  saturday: {
    type: range,
  },
});

module.exports = Availability = mongoose.model("availability", availabilitiesSchema)
