<?php
// Get data from form  
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$location = $_POST['location']; // Dodane pole dla lokalizacji
$message = $_POST['message'];
$projectType = $_POST['project-type'];
$projectScope = $_POST['project-scope'];
$deadline = $_POST['deadline'];
$additionalNotes = $_POST['additional-notes'];
$hiddenInput = $_POST['hidden-input'];

$to = "pawel.nogawka123@interia.pl";
$subject = "Mail From website";
$txt = "Name = " . $name . "\r\n Email = " . $email . "\r\n Phone = " . $phone . "\r\n Location = " . $location .
    "\r\n Message = " . $message .
    "\r\n Rodzaj projektu = " . $projectType .
    "\r\n Zakres projektu = " . $projectScope .
    "\r\n Termin realizacji = " . $deadline .
    "\r\n Dodatkowe uwagi lub specjalne wymagania = " . $additionalNotes;

$headers = "From: noreply@yoursite.com";

// Dodaj warunek sprawdzający pole ukryte
if ($email != NULL && empty($hiddenInput)) {
    mail($to, $subject, $txt, $headers);
}

header("Location:thankyou.html");
?>
