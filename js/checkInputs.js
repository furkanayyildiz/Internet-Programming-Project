function checkInputs() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const rePass = document.getElementById("rePassword").value;
  if (username.length < 6 || username.length > 15) {
    alert("Username should be between 6-15 characters");
  } else if (pass.length < 6 || pass.length > 15) {
    alert("Password should be between 6-15 characters");
  } else if (pass.length != rePass.length) {
    alert("Password and Re-Password should be same");
  }
}
