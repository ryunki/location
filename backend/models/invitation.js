const mongoose = require('mongoose')
const { Schema } = mongoose;

const invitationSchema = new Schema({
  // String is shorthand for {type: String}
  senderId: { 
    type: Schema.Types.ObjectId,
    ref: "User" },
  receiverId: { 
    type: Schema.Types.ObjectId,
    ref: "User"},
});

module.exports = mongoose.model("Invitation",invitationSchema)