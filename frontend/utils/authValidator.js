export function validateUsername(username) {
  return username.length > 2 && username.length < 13
    ? {
        isValid: true,
        message: '',
      }
    : {
        isValid: false,
        message: 'username should be between 3 to 12 in length',
      }
}
function validatePassword(password) {
  return password.length > 2 && password.length < 13
    ? {
        isValid: true,
        message: '',
      }
    : {
        isValid: false,
        message: 'password should be between 3 to 12 in length',
      }
}

export function validateLoginForm({ username, password }) {
  const isUsernameValid = validateUsername(username)
  const isPasswordValid = validatePassword(password)

  if ( !username && !password){
    return {
      isValid: false,
      message: '',
    }
  }
  if (!(username && password)) {
    return {
      isValid: false,
      message: 'missing input field',
    }
  }
  if (isUsernameValid.isValid == false) {
    return isUsernameValid
  }
  if (isPasswordValid.isValid == false) {
    return isPasswordValid
  }
  return {
    isValid: true,
    message: 'press button to login',
  }
}
export function validateRegisterForm({ username, password, confirmPassword }) {
  const isUsernameValid = validateUsername(username)
  const isPasswordValid = validatePassword(password)
  const isConfirmPasswordValid = validatePassword(confirmPassword)
  if ( !username && !password && !confirmPassword){
    return {
      isValid: false,
      message: '',
    }
  }
  if (!(username && password && confirmPassword)) {
    return {
      isValid: false,
      message: 'missing input field',
    }
  }
  if (isUsernameValid.isValid == false) {
    return isUsernameValid
  }
  if (isPasswordValid.isValid == false) {
    return isPasswordValid
  }
  if (isConfirmPasswordValid.isValid == false) {
    return isConfirmPasswordValid
  }
  if (password !== confirmPassword) {
    return {
      isValid: false,
      message: 'password does not match',
    }
  }
  return {
    isValid: true,
    message: 'press button to register',
  }
}
