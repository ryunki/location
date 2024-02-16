const UserModel = require('../../models/user') 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const postRegister = async(req,res,next)=>{
  const {username, password, confirmPassword} = req.body
  if (!(username && password && confirmPassword)){
    return res.status(401).send('Missing username or password')
  }
  if (password !== confirmPassword){
    return  res.status(401).send("The provided passwords do not match. Please ensure both passwords are the same.")
  }
  try{
    const userExists = await UserModel.exists({username})
    if (userExists){
      return res.status(409).send('username is already registered. Please choose a different username.')
    }
    const hashedPassword = await bcrypt.hashSync(password, 10)
    const userCreated = await UserModel.create({username, password:hashedPassword})
    const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
    
    res.status(201).json({
      userDetails: {
        _id: userCreated._id,
        username: userCreated.username,
        token
      }
    })
  }catch(error){
    return res.status(500).send("Could not register. Please try again")
  }
}

module.exports = postRegister