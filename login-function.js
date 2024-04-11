function login() {
    var user = "Ali zaib";
    var pw = "1234";
    var OTP = "1212";
    if (user == "Ali zaib") {
        console.log("Ali zaib");
        if (OTP == "1212") {
            console.log("welcome", user);
        }
        else
            (console.log("invalid OTP"));
        if (pw == "1234") {
            console.log("correct password");
        }
        else
            (console.log("incorrect password"));
    }
    else
        (console.log("invalid user"));
}
login();
