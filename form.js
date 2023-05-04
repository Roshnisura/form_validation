function ValidationForm() {
    let username = document.forms["RegForm"]["name"];
    let email = document.forms["RegForm"]["email"];
    let phoneNumber = document.forms["RegForm"]["phone"];
    let pass = document.forms["RegForm"]["pass"];
    let re_pass = document.forms["RegForm"]["re_pass"];
    if(username.value == "") {
      window.alert("Please enter your name.");
      username.focus();
      return false;
    }
    if(phoneNumber.value == "") {
        window.alert("Please enter your telephone number.");
        phoneNumber.focus();
        return false;
      }
    if(email.value == "") {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf("@", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
    if(email.value.indexOf(".", 0) < 0) {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
   
    if(pass.value =="") {
      window.alert("Password should be contain 6 ltters");
      pass.focus();
      return false;
    }
    if(pass!==re_pass){
        window.alert("password must be same");
        re_pass.focus(); 
        return false;
        
     }
     alert("login succesfully");
    
    return true;
  }