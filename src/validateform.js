global.validate = function () {

    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    // if (document.myForm.EMail.value == "") {
    //     alert("Please provide your Email!");
    //     document.myForm.EMail.focus();
    //     return false;
    // }
    if (document.myForm.nationalId.value == "" || isNaN(document.myForm.nationalId.value) || document.myForm.nationalId.value.length != 5) {
        alert("Please input your National ID!");
        document.myForm.nationalId.focus();
        return false;
    }
    var emailID = document.myForm.EMail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID")
        document.myForm.EMail.focus();
        return false;
    }
    return (true);
}

