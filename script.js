//object to store value
let userDetailDatabase={}

function getUserDetails(){

  let userName = prompt("Enter your Username");
if(userName == null){
  return;
}

  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  while(validateUserName(userName) == false){
    userName = prompt("Username must be less than 10 and greater than 0")
  }
  userDetailDatabase["Username"]=userName
  
  //Email
  let email = prompt("Enter your email");
  if(email == null){
    return;
  }
  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    checkEmailResult = emailCheck.test(email);
  
    if (checkEmailResult == true) {
      return true;
    } else {
      return false;
    }
  }
  while(validateEmail(email) == false){
    email = prompt("Enter a valid email")
  };
  userDetailDatabase["email"]=email
  
  //phone Number
  let phoneNumber = prompt("Enter Phone Number");
  
  if(phoneNumber == null){
    return;
  }
  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  while(validatePhoneNumber(phoneNumber) == false){
    phoneNumber= prompt ("Enter a valid Number")
  }
  userDetailDatabase["Phone Number"]=phoneNumber
  
  //Password
  let password = prompt("Enter Password");
  if(password == null){
    return;
  }
  function validatepassword(password) {
    if (password.length < 8) {
      return false;
    } else {
      return true;
    }
  }
  while(validatepassword(password) == false){
     password = prompt("Password must not be less than 8")
  }
  userDetailDatabase["password"]=password
  //confirm password
  let confirmPassword = prompt("Confirm Password");
  if(confirmPassword == null){
    return;
  }
  function validateConfirmpassword(confirmPassword) {
    if (confirmPassword !=password) {
      return false;
    } else {
      return true;
    }
  }
  while(validateConfirmpassword(confirmPassword)==false){
    confirmPassword = prompt("Password does not match. Try again")

  }
 function displayUserDetails(){
  alert(`Your Details\n
    Username: ${userDetailDatabase.userName}
    Phone Number: ${userDetailDatabase.phoneNumber}
    Email: ${userDetailDatabase.email}`)
 }

}


