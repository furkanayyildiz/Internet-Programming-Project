<!DOCTYPE html>

<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Register</title>
  <link rel="stylesheet" href="css/index.css">
  <script src="js/checkInputs.js"></script>

</head>

<body>





  <div class="container">
    <h1>Register</h1>
    <form method="post" action="">
      <div class="input-field">
        <input type="text" name="username" required id="username" >
        <span></span>
        <label>Username</label>
      </div>
      <div class="input-field">
        <input type="text" required>
        <span></span>
        <label>Name</label>
      </div>
      <div class="input-field">
        <input type="password" name="password" id="password" required >
        <span></span>
        <label>Password</label>
      </div>
      <div class="input-field">
        <input type="password" name="rePassword" id="rePassword" required >
        <span></span>
        <label>Re-Password</label>
      </div>

      <button class="btn" name="submit" onclick="checkInputs()">Register</button>
      <div class="register">
        already member? <a href="index.php">Sign in</a>
      </div>
  </div>

  </form>
  </div>

<?php    
       
      include("dbConnection.php");
      if(isset($_POST['submit'])){
      $username=$_POST['username'];
      $password=$_POST['password'];
      $rePassword=$_POST['rePassword'];
      $encodedPassword=md5($password);
      $query=" select * from login_table where username = '$username'";
      $result = mysqli_query($conn,$query);

      $num=mysqli_num_rows($result);
      if($num==1){
          echo "<script> alert('The username already taken by another user!'); </script>";
          
      } 
      elseif(strlen($username)>15||strlen($username)<6){
        echo "<script> alert('Username should be between 6-15 characters'); </script>";
      }    
      elseif(strlen($password)>15||strlen($password)<6){
        echo "<script> alert('Password should be between 6-15 characters'); </script>";
      }
      elseif(strlen($password)!=strlen($rePassword)){
        echo "<script> alert('Password and Re-Password should be same'); </script>";
      }
      else{   
          $reg ="insert into login_table ( username, password) values ( '$username', '$encodedPassword')";
          mysqli_query($conn,$reg);
          header("location:index.php");
        }}
        
?>

</body>

</html>