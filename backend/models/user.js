const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
  // String is shorthand for {type: String}
  username: { type: String, unique:true },
  password: { type: String},
  friends:[{
    type: Schema.Types.Object,
    ref:'User'
  }]
});

module.exports = mongoose.model("User",userSchema)