const InvitationModel = require('../../models/invitation')
const UserModel = require('../../models/user')

const postInvite = async (req,res,next)=>{
  const {receiverUsername} = req.body
  const {userId, username} = req.user
  try{
    if (receiverUsername === username){
      return res.status(409).send('You cannot become friends with yourself')
    }
    // check if an invited username exists or not
    const receiver = await UserModel.findOne({username: receiverUsername})
    if (!receiver){
      return res.status(404).send('User does not exist')
    }
    // check if a user is already a friend with the input user
    const sender = await UserModel.findById(userId)
    if (sender.friends.includes(receiver._id)){
      return res.status(409).send('You are already friend')
    }
    // check if invitation already exists
    const invitationExists = await InvitationModel.exists({
      senderId: userId, 
      receiverId: receiver._id
    })
    if (invitationExists){
      return res.status(409).send('Invitation has already been sent')
    }
    // otherwise, create an invitation
    await InvitationModel.create({
      senderId: userId,
      receiverId: receiver._id
    })
    // TO DO
    //if invitation has been successfully created we update friends invitations if other user is online
    //send pending invitations update to specific user

    res.status(201).send('Invitation has been sent')
  }catch(error){
    return res.status(500).send('Could not send invitation. Please try again')
  }
}

module.exports = postInvite
