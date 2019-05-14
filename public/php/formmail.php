<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Namnlöst dokument</title>
    </head>

    <body>

        <?php

            $to = "phijoh0131@edu.halmstad.se";
            $from = $_POST["email"];
            $subject = $_POST["subject"];
            $message = $_POST["message"];

            if($from != "") {

                if ($message != "") {

                    if (mail ($to, $subject, $message ,"From: WebProdject1 <$from>"))

                        echo nl2br("<h2>Ditt meddelande har skickats!</h2> 
                                    <b>mottagare:</b> $to
                                    <b>ämne:</b> $subject
                                    <b>meddelande:</b>
                                    $message");

                    else
                        echo "Det gick inte att skicka ditt meddelande";

                }
                else
                    echo "Du måset fulla i ett medelande";
            }
            else
                echo "Du måste fylla i din mail";

        ?>

    </body>
</html>