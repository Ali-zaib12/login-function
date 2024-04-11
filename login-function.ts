function login(){
    let user = "Ali zaib"
    let pw = "1234"
    let OTP = "1212"

    if(user == "Ali zaib"){

        console.log("Ali zaib")

        if(OTP == "1212"){

            console.log("welcome", user)
        }else(console.log("invalid OTP"))
       
        if(pw == "1234"){

            console.log("correct password")
      
        }else(console.log("incorrect password"))

    }else(console.log("invalid user"))

 
}

   login()