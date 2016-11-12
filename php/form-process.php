<?php

// adapted from: https://webdesign.tutsplus.com/tutorials/building-a-bootstrap-contact-form-using-php-and-ajax--cms-23068

$name = $_POST["name"];
$email = $_POST["email"];
$company = $_POST["company"];
$website = $_POST["website"];
$subject = $_POST["subject"];
$message = $_POST["message"];
 
$EmailTo = "tricket2@u.rochester.edu";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Company: ";
$Body .= $company;
$Body .= "\t";

$Body .= "Website: ";
$Body .= $website;
$Body .= "\n\n";

// $Body .= "Subject: ";
// $Body .= $subject;
// $Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $subject, $Body, "From:".$email);
 
// redirect to success page
if ($success) {
   echo "success";
} else{
    echo "invalid";
}
 
?>