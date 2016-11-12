<? php
	if($_SERVER["REQUEST_METHOD"] == "POST") {

		echo "OKAY LET'S DO THIS";
		
		//grab user info
		$name = $_POST["name"];
		$email = $_POST["email"];
		$subject = $_POST["subject"];
		$message = $_POST["message"];

		//check for proper submissions
		if (empty($name) OR empty($email) OR empty($subject) OR empty($message)) {
			//failure
			echo "empty params";
			http_response_code(400);
			exit;
		}

		//build email
		$to = "tarinrickett@rochester.edu";
		$from = "From: $name <$email>";
		$mySubject = "RE:SITE $subject";
		$email = "FROM: $name\n";
		$email .= "\t$email\n";
		if (!empty($_POST["company"]) {
			$company = $_POST["company"];
			$email .= "\t$company\n";
		}
		if (!empty($_POST["website"]) {
			$website = $_POST["website"];
			$email .= "\t$website\n";
		}
		$email .= "\n\n";
		$email .= "$message\n";
		echo "From: $name <$email>\n\t $company , $website \n\n $subject \n $message";

		//send
		if (mail($to, $mySubject, $email, $from)) {
			echo "oh my god it worked";
			http_response_code(200);
		} else {
			echo "not working";
			http_response_code(500);
		}

	} else {
		echo "nope not at all";
		http_response_code(403);
	}

?>