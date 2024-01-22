<?php

    //database connection
    $conn  = new mysqli('localhost', root ,'');
    if(isset($_POST['signinBtn'])){
        $email = $_POST['email'];
        $password = $_POST['password'];

        $_sql= "SELECT *FROM Netflix.registration WHERE email = '$email'";
        $result = mysqli_query($conn,$_sql);
        while($row = mysqli_fetch_assoc($result)){
            $resultPassword = $row['password'];
            if($password = $resultPassword){
                header('Location:welcomepage.html');
            }else{
                echo "<script> 
                    alert('Login failed');    
                </script>";
            }
        }
    }







    if($conn->connect_error){
        die('COnnection failed'. $conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into registration(email,password)
            values(?,?)");
            $stmt->bind_param("ss", $email,$password);
            $stmt->execute();
            echo "Sign in succesful";
            $stmt->close();
            $conn->close();

    }

 
?>