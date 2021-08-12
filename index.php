<!DOCTYPE html>

<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/index.css">
  </head>
  <body>
    <div class="container">
      <h1>Login</h1>
      <form method="post" action="">
        <div class="input-field">
          <input type="text"  name="username" required>
          <span></span>
          <label>Username</label>
        </div>
        <div class="input-field">
          <input type="password"  name="password" required>
          <span></span>
          <label>Password</label>
        </div>
       
        <button class="btn" name="submit">Login</button>
        <div class="register">
          Not a member? <a href="register.php">Sign up</a>
        </div>
      </form>
    </div>

    <?php
      if(isset($_POST['submit'])){
      include("dbConnection.php");
      

      $username=$_POST['username'];
      $password=$_POST['password'];
      $encodedPassword=md5($password);

      $query=" select * from login_table where username = '$username' && password= '$encodedPassword'";
      $result = mysqli_query($conn,$query);

      $num=mysqli_num_rows($result);
      if($num==1){
      header('location:home.html');
      }
      else{
        echo "<script> alert('Username or Password is wrong!'); </script>";
      }
    }
?>

  </body>
</html>
