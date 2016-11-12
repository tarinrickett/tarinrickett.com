<?php

//get data
$name = $_POST["name"];
$from = $_POST["email"];
$company = $_POST["company"];
$website = $_POST["website"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$to = "tricket2@u.rochester.edu";
 
//generate email body
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "From: ";
$Body .= $from;
$Body .= "\n";

$Body .= "Company: ";
$Body .= $company;
$Body .= "\t";

$Body .= "Website: ";
$Body .= $website;
$Body .= "\n\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

//send email
mail($to, $subject, $Body, "From:".$from);
 
?>