const InvitationModel = require('../../models/invitation')
const UserModel = require('../../models/user')

const postAccept = async (req, res, next) => {
  const { id } = req.body
  try {
    // find invitation from sender's username
    const invitation = await InvitationModel.findById(id)

    if(!invitation) {
      return res.status(401).send('Error occured. Please try again')
    }

    const {senderId, receiverId} = invitation
    // add friends to both users
    const sender = await UserModel.findById(senderId)
    sender.friends.push(receiverId)
    const receiver = await UserModel.findById(receiverId)
    receiver.friends.push(senderId)
    // save updated documents
    await sender.save()
    await receiver.save()
    // delete invitation
    await InvitationModel.findByIdAndDelete(id)

    return res.status(200).send('Invitation succesfully accepted')

  } catch (error) {
    return res.status(500).send('Could not accept invitation. Please try again')
  
  }
}

module.exports = postAccept
