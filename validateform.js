global.validate = function () {

    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    // nationalId validation
    var irssn = require('iranian-ssn');
    var result = irssn.validate(document.myForm.nationalId.value);
    if (result == false) {
    // console.log(result);
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

