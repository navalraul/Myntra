function Register(event) {
    // alert("working")
    event.preventDefault();

    var Name = document.getElementById("Myntausername").value
    // console.log(Name);
    var Email = document.getElementById("Myntrauseremail").value
    // console.log(Email);
    var Password = document.getElementById("Myntrauserpassword").value
    // console.log(Password);
    var Confirmpassword = document.getElementById("Myntrauserconformpassword").value
    // console.log(Confirmpassword);

    if(Name && Email && Password && Confirmpassword) {
        if(Password.length >=8 && Confirmpassword){
            if(Password == Confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("MyntraUsers")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == Email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {userName: Name,userEmail: Email,userPassword: Password,userConfirmPassword: Confirmpassword}
                    Ls.push(userdata);
                    localStorage.setItem("MyntraUsers", JSON.stringify(Ls))
                    alert("Registration Successful");
                    window.location.href = `./MyntraLogin.html`;
                    document.getElementById("Myntausername").value = ""
                    document.getElementById("Myntrauseremail").value = ""
                    document.getElementById("Myntrauserpassword").value = ""
                    document.getElementById("Myntrauserconformpassword").value = ""
                }
            }else {
                console.log("Password Not Matched")
            }
        }else {
            console.log("Password should contain alteast 8 characters")
        }
    }else {
        console.log ("All fields are mandatory")
    }
}