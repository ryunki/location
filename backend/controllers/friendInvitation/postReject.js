const InvitationModel = require('../../models/invitation')
const UserModel = require('../../models/user')

const postReject = async (req,res,next)=>{
  const {id} = req.body
  try{
    // remove invitation from the collection
    const invitationExists = await InvitationModel.exists({_id: id})
    if(invitationExists){
      await InvitationModel.findByIdAndDelete(id)
    }

    return res.status(200).send('Invitation succesfully rejected')


  }catch(error){
    return res.status().send()
  }
}

module.exports = postReject