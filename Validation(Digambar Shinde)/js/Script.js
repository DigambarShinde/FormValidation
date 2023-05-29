
//---------------------------------------Pop Up for Login------------------------------------------
var logInPopUp = new loginPopUpFunction();
function loginPopUpFunction() {

  this.logInPopUpOn = logInPopUpOn;
  function logInPopUpOn() {
    document.getElementById('loginPage').style.display = "block";
    document.getElementById('overlayForLogIn').style.display = "block";
  }

  this.logInPopUpOff = logInPopUpOff;
  function logInPopUpOff() {
    document.getElementById('loginPage').style.display = "none";
    Validation.resetdata();
  }

  this.registrationPopUpviaLogin = registrationPopUpviaLogin;
  function registrationPopUpviaLogin() {
    document.getElementById('loginPage').style.display = "none";
    document.getElementById('registrationPage').style.display = "block";
    document.getElementById('overlayForRegistration').style.display = "block";
  }

  this.logInData = logInData;
  function logInData() {
    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPassword').value;

    if (userPassword == 'pass@123') {
      document.getElementById('nav_userName').innerHTML = "Hello " + userName;
      document.getElementById('loginPage').style.display = "none";
    } else {
      document.getElementById('incorrectData').innerHTML = "*Password is Incorrect! Please Enter Correct Password";
    }
  }
//--------------------------------------------to Check wheather fields are empty or not------------------------------------------
  this.emptyData = emptyData;
  function emptyData() {

    var userName = document.getElementById('userName').value;
    var userPassword = document.getElementById('userPassword').value;

    if (userName == "" || userPassword == "") {
      document.getElementById('incorrectData').innerHTML = "Please Fill Out Required Field";
    }
  }
//--------------------------------Regex Validation for User Name-------------------------------------
  this.userNamereg=userNamereg;
  function userNamereg(){

    var firstreg = /^[a-zA-Z]+$/;
    var firstname = document.getElementById("userName").value;

    if (firstreg.test(firstname)) {
      document.getElementById("userNameError").innerHTML = " ";
    }
    else {
      document.getElementById("userNameError").innerHTML = "*Please Enter valid First Name";
      document.getElementById("userNameError").style.color = 'red';
    }
  }
}
//---------------------------------------Pop Up for Login End's------------------------------------------
//---------------------------------------Pop Up for Registraction------------------------------------------
var registractionPopUp = new registractionPopUpFunction();
function registractionPopUpFunction() {

  this.registrationPopUpOn = registrationPopUpOn;
  function registrationPopUpOn() {
    document.getElementById('registrationPage').style.display = "block";
    document.getElementById('overlayForRegistration').style.display = "block";
  }

  this.registrationPopUpOff = registrationPopUpOff;
  function registrationPopUpOff() {
    document.getElementById('registrationPage').style.display = "none";
    Validation.resetdata();
  }

  this.logInPopUpOnviaRegistration = logInPopUpOnviaRegistration;
  function logInPopUpOnviaRegistration() {
    document.getElementById('registrationPage').style.display = "none";
    document.getElementById('loginPage').style.display = "block";
    document.getElementById('overlayForLogIn').style.display = "block";
  }

}
// --------------------------------------------Validation Start-----------------------------------------------
var Validation = new registractionValidation();
function registractionValidation() {

  var date = new Date();
  //------------------------------------------------For Blank Spaces ---------------------------------- 
  this.fillAllData = fillAllData;
  function fillAllData() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('last').value;
    var dob = document.getElementById('dob').value;
    var doj = document.getElementById('doj').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_Password').value;

    if (firstName == "") {
      document.getElementById("firsterror").innerHTML = "Please Fill Out This Field";
      document.getElementById("firsterror").style.color = 'red';
    } else if (lastName == "") {
      document.getElementById("lasterror").innerHTML = "Please Fill Out This Field";
      document.getElementById("lasterror").style.color = 'red';

    } else if (dob == "") {
      document.getElementById("doberror").innerHTML = "Please Fill Out This Field";
      document.getElementById("doberror").style.color = 'red';
    }
    else if (doj == "") {
      document.getElementById("dojerror").innerHTML = "Please Fill Out This Field";
      document.getElementById("dojerror").style.color = 'red';
    }
    else if (mail == "") {
      document.getElementById("mailerror").innerHTML = "Please Fill Out This Field";
      document.getElementById("mailerror").style.color = 'red';
    }
    else if (phone == "") {
      document.getElementById("phoneerror").innerHTML = "Please Fill Out This Field";
      document.getElementById("phoneerror").style.color = 'red';
    }
    else if (password == "") {
      document.getElementById("passworderror").innerHTML = "Please Fill Out This Field";
      document.getElementById("passworderror").style.color = 'red';
    } else if (confirm_password == "") {
      document.getElementById("confirm_Password_error").innerHTML = "Please Fill Out This Field";
      document.getElementById("confirm_Password_error").style.color = 'red';
    } else {
      return true;
    }
  }
  //---------------------------------First Name Validation------------------------------
  this.firstName = firstName;
  function firstName() {
    var firstreg = /^[a-zA-Z]+$/;
    var firstname = document.getElementById("firstName").value;

    if (firstreg.test(firstname)) {
      document.getElementById("firsterror").innerHTML = " ";
      return true;
    }
    else {
      document.getElementById("firsterror").innerHTML = "*Please Enter valid First Name";
      document.getElementById("firsterror").style.color = 'red';
    }
  }
  //---------------------------------Last Name Validation------------------------------
  this.lastName = lastName;
  function lastName() {
    var lastreg = /^[a-zA-Z]+$/;
    var lastname = document.getElementById('last').value;

    if (lastreg.test(lastname)) {
      document.getElementById("lasterror").innerHTML = " ";
      return true;
    } else {
      document.getElementById("lasterror").innerHTML = "*Please Enter valid Last Name";
      document.getElementById("lasterror").style.color = 'red';
    }
  }
  //---------------------------------Date Of Birth Validation------------------------------
  this.dob = dob;
  function dob() {
    var dobreg = /^([1-9]{1}|0[1-9]|1[0-9]|2[0-9]|3[0-1])-([1-9]{1}|0[1-9]|1[0-2])-(19[0-9][0-9]|20[0][0-9]|20[1][0-9]|20[2][0-3])$/;
    var dob = document.getElementById('dob').value;

    var splitdob = dob.split("-");
    var year = parseInt(splitdob[2]);

    if ((dobreg.test(dob) && year <= date.getFullYear())) {
      document.getElementById("doberror").innerHTML = " ";
      return true;
    } else {
      document.getElementById("doberror").innerHTML = "*Please Enter valid DOB";
      document.getElementById('doberror').style.color = 'red';
    }
  }
  //---------------------------------Date of Joining Validation------------------------------
  this.doj = doj;
  function doj() {
    var dojreg = /^([1-9]{1}|0[1-9]|1[0-9]|2[0-9]|3[0-1])-([1-9]{1}|0[1-9]|1[0-2])-(19[0-9][0-9]|20[0][0-9]|20[1][0-9]|20[2][0-3])$/;
    var doj = document.getElementById('doj').value;

    var splitdoj = doj.split("-");
    var yearofdoj = parseInt(splitdoj[2]);

    if ((dojreg.test(doj) && yearofdoj <= date.getFullYear())) {
      document.getElementById("dojerror").innerHTML = " ";
      return true;
    } else {
      document.getElementById("dojerror").innerHTML = "*Please Enter valid DOJ";
      document.getElementById('dojerror').style.color = 'red';
    }
  }
  //---------------------------------Mail Validation------------------------------
  this.mail = mail;
  function mail() {
    var mailreg = /^[a-zA-Z_0-9.+-]{3,}@{1}[a-zA-Z]{2,}[.]{1}[a-z]{1,}$/;
    var mail = document.getElementById('mail').value;

    if (mailreg.test(mail)) {
      document.getElementById("mailerror").innerHTML = " ";
      return true;
    } else {
      document.getElementById("mailerror").innerHTML = "*Please Enter valid Mail Id";
      document.getElementById('mailerror').style.color = 'red';
    }
  }
  //---------------------------------Phone Validation------------------------------
  this.phone = phone;
  function phone() {

    var phonereg = /^([6-9]{1})([0-9]{9})$/;
    var phone = document.getElementById('phone').value;

    if (phonereg.test(phone)) {
      document.getElementById("phoneerror").innerHTML = " ";
      return true;
    } else {
      document.getElementById("phoneerror").innerHTML = "*Please Enter valid Phone Number";
      document.getElementById('phoneerror').style.color = 'red';
    }
  }
  //---------------------------------Password Function------------------------------
  this.password = password;
  function password() {

    var password = document.getElementById('password').value;

    if (password == "") {
      document.getElementById("passworderror").innerHTML = "Please Fill Out This Field";
      document.getElementById('passworderror').style.color = 'red';
    } else {
      document.getElementById("passworderror").innerHTML = "";
      return true;
    }
  }
  //---------------------------------Confirm PassWord Function------------------------------
  this.conformPassword = conformPassword;
  function conformPassword() {

    var password = document.getElementById('password').value;
    var confirm_Password = document.getElementById('confirm_Password').value;

    if (password == confirm_Password) {
      return true;
    } else {
      document.getElementById("confirm_Password_error").innerHTML = "*Password is Incorrect!!Please Enter Correct Password";
      document.getElementById("confirm_Password_error").style.color = 'red';

    }
  }
  //---------------------------------Reset Form------------------------------
  this.resetdata = resetdata;
  function resetdata() {

    document.getElementById("firsterror").innerHTML = "";
    document.getElementById("lasterror").innerHTML = "";
    document.getElementById("doberror").innerHTML = "";
    document.getElementById("dojerror").innerHTML = "";
    document.getElementById("mailerror").innerHTML = "";
    document.getElementById("phoneerror").innerHTML = "";
    document.getElementById("passworderror").innerHTML = "";
    document.getElementById("confirm_Password_error").innerHTML = "";



  document.getElementById("firstName").value= "";
  document.getElementById("last").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("doj").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirm_Password").value = "";
  
  document.getElementById("userName").value= "";
  document.getElementById("userPassword").value= "";

  }
  //---------------------------------Submit form Validation------------------------------
  this.formSubmit = formSubmit;
  function formSubmit() {
    if (fillAllData() == true && dob() == true && doj() == true && mail() == true && phone() == true && password() == true && conformPassword() == true) {
      var formid = document.getElementById("registerForm");
      formid.submit();
      document.getElementById('registrationPage').style.display = "none";
      document.getElementById('outer_section').style.display = 'none';
      document.getElementById('table').style.display = 'block';
      submitData();

    } else {
      document.getElementById("result").innerHTML = "Please Fill Up Required Fields";
      document.getElementById("result").style.color = 'red';
    }
  }
  //---------------------------------Submit Data-------------------------
  this.submitData = submitData;
  function submitData() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('last').value;
    var dob = document.getElementById('dob').value;
    var doj = document.getElementById('doj').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;

    document.getElementById('tableFirstName').innerHTML = firstName;
    document.getElementById('tableLastName').innerHTML = lastName;
    document.getElementById('tabledob').innerHTML = dob;
    document.getElementById('tabledoj').innerHTML = doj;
    document.getElementById('tablemail').innerHTML = mail;
    document.getElementById('tablephone').innerHTML = phone;

  }
}
//--------------------------------------------Validation End---------------------------------------------

//-----------------------------Restrication Part Start's------------------------------
var restrict = new restrication();
function restrication() {

  this.restrictNumbers = restrictNumbers;
  function restrictNumbers(element) {
    return element.value = element.value.replace(/[^a-zA-Z]+/, '');
  }

  this.restrictCharacter = restrictCharacter;
  function restrictCharacter(element) {
    return element.value = element.value.replace(/[^0-9-]+/, '');
  }

  this.restrictForMail = restrictForMail;
  function restrictForMail(element) {
    return element.value = element.value.replace(/[!#$%^&*()?'":;<>]+/, "");
  }

  this.restrictAllAcptNumber = restrictAllAcptNumber;
  function restrictAllAcptNumber(element) {
    return element.value = element.value.replace(/[^\d]+/, '');
  }
}
//-----------------------------Restrication Part End's------------------------------