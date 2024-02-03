<?php
	
	$email = $_POST['email'];
	$password = $_POST['password'];


	// Database connection
	$conn = new mysqli('localhost','root','','User');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("select *from registration where email =?");
		$stmt->bind_param("s", $email);
	 	$stmt->execute();
		$stmt_result = $stmt->get_result();
		if($stmt_result->num_rows > 0) {
			$data = $stmt_result->fetch_assoc();
				if($data['password'] === $password){
					echo "Login successfully...";
					header("Location: /netflixclone_own/pages/landingPage/landingPage.html");
    				exit;

				}else{
					echo "<h2> Invalid password</h2>";
				}
		}else{
			echo"<h2> Invalid Email or password</h2>";
		}
		
		$stmt->close();
		$conn->close();
	}
?>