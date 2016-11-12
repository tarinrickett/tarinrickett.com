$(document).ready(function() {
    console.log("Ready");
    var from, to, subject, text;
    $("#contact_submit").click(function() {
        console.log("CLICKED !!!!");
        to = "tarinrickett@rochester.edu";
        subject = 'RE:SITE ' + $("#subject").val();
        text = 'From: ' + $("#name").val() + 
                    '\n\t' + $("#email").val() +
                    '\n\t' + $("#company").val() +
                    '\t' + $("#website").val() +
                    '\n\n' + $("#message").val();
        console.log("Sending E-mail...Please wait");
        $.get("http://localhost:3000/send", {
            to: to,
            subject: subject,
            text: text
        }, function(data) {
            if (data == "sent") {
                console.log("SAYS WE'vE SENT");
                // $("#message").empty().html("Email is been sent at " + to +
                //     " . Please check inbox !");
            }
        });
    });
});
