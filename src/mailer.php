<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
        $text = trim($_POST["form_msg"]);
        $name = trim($_POST["form_name"])

        if ( empty($text) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        $recipient = "akors99@gmail.com";

        $subject = "New message from $email Via React Site";

        $email_content .= "Email: $email\n";
        $email_content .= "Name: $name\n\n";
        $email_content .= "Message:\n$text\n"

        // Build the email headers.
        $email_headers = "From: <$email>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! Your message has been sent.";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn’t send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }
?>