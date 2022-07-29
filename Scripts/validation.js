$.validator.addMethod("noSpace", function(value, element){
    return value == '' || value.trim().length != 0
}, "Spaces are not Allowed!");

$("#form-validation").validate({
    rules:{
        name:{
            minlength: 2,
            noSpace: true
        },
        email:{
            email: true
        },
        phone:{
            required: true,
            Number: true,
            minlength: 10,
            maxlength: 10
        },
        password: {
            minlength: 8,
            maxlength: 16,
            pwdvalid: true
            
        },
        c_password:{
            EqualTo: '#password',
            minlength: 8,
            maxlength: 16
        }
    },
    messages:{
        name:{
            required: "Please Enter your Name",
            minlength: "Name should contain at least 2 characters"
        },
        email:{
            required: "Please Enter your Email",
            email: "Please Enter Valid Email"
        },
        phone:{
            required: "Please Enter your Phone Number",
            minlength: "Number must contain 10 digits",
            maxlength: "Number must contain 10 digits only"
        },
        password:{
            required: "Please Enter Password",
            minlength: "Password should contain at least 8 characters",
            maxlength: "Maximum length of password should be 16 characters"
        },
        c_password:{
            required: "Please Enter Password",
            EqualTo: "Please Enter the Same Password"   
        }
    },

    submitHandler: function(form){
        form.submit();
    }
})

function myfunc(){
    window.alert("Your Username and Password will be sent on your E-mail shortly. :)");
}

