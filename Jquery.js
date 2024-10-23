<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function() {
            $("#fadeOutButton").click(function() {
                $("#fadeOutText").fadeOut();
            });
            $("#appendButton").click(function() {
                $("#appendText").append(" Appended text.");
            });
            $("#changeColorButton").click(function() {
                $("#changeColorText").css("color", "red");
            });
        });
    </script>
