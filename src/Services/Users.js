/* eslint-disable no-unreachable */
// import axios from "axios"




// const USERS_API_URL = "http://localhost:8080/login"

// const login = (username,password) =>{
  
//   return axios
//   .post(USERS_API_URL + "/login", {
//     username,
//     password
//   })
//   .then((response) =>{
//     if(response.data.access_token){
//       localStorage.setItem("user", JSON.stringify(response.data))
//     }
//     return response.data
//   })
// }


// const  signupDonor= (username,password) =>{
 
//   return axios
//   .post(USERS_API_URL + "/user/save/donor", {
//     username,
//     password

//   })
//   .then(console.log("succsess") )
//   // =>{
//   //   if(response.data.access_token){
//   //     localStorage.setItem("user",JSON.stringify(response.data))
//   //   }
//   //   return response.data
//   // }

// }





const logout = ()=>{
  localStorage.removeItem("user")
}

const getCurrentUser = ()=>{
  return JSON.parse(localStorage.getItem("user"))
}

const UserService =  {
  // signupDonor,
  //  login,
  logout,
  getCurrentUser
}
export default UserService

// const handleLogin = async(e) =>{
//   e.preventDefault();
//   try{
//       await UserService.login(username, password)
//       .then(() =>{
//           navigate("/")
//           window.location.reload()
//       },
//       (error) =>{
//           console.log(error)
//       }
//       )
//   }catch(err){
//       console.log(err)
//   }