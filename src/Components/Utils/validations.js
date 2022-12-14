const firstNameValidation = (firstName) => {
      if(firstName === ""){
            return{
                  message: "please enter your first name",
                  result: false,
            }
      }else{
            return{
                  message:"success",
                  result: "true",
            }
           
      }
 }


const lastNameValidation = (lastName) =>{
      if(lastName === ""){
            return{
                  message: "please enter your first name",
                  result: false,
            }
      }else{
            return{
                  message:"success",
                  result: "true",
            }
           
      }
 }



const passwordValidations = (password)=>{
 if(password === "" && password.length < 4){
       return {
        message:"Enter your password",
        result:false,
       
      }
 }

 return{
    message:"success",
    result: true,
 }
}

const emailValidations = (email)=>{
 if(email === "" &&  !email.includes("@")){
      return{
            message:"please enter your Email",
            result: false,
      }
      }else{
            return{
                  message:"successful",
                  result: true,
            }
      }
 }

export {
      firstNameValidation,
      lastNameValidation,
      emailValidations,
      passwordValidations,
}
