const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the mongoose schema for the database
const JotspotSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },

  // this record will not be used but will be able to use later on
  timestamp: {
    type: String,
    default: Date.now()
  },
});

const Jotspot = mongoose.model("Jotspot", JotspotSchema);

module.exports = (Jotspot);