<html>
<head>
    <title>jQuery Bonanza</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .browser-bar {
            background-color: #ccc;
            padding: 10px;
            display: flex;
            align-items: center;
        }
        .browser-bar div {
            margin-right: 10px;
        }
        .browser-bar input {
            flex-grow: 1;
            padding: 5px;
        }
        .browser-bar .search-icon {
            width: 20px;
            height: 20px;
            border: 1px solid black;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            border: 1px solid black;
            cursor: pointer;
        }
        .button:hover {
            background-color: #f0f0f0;
        }
        .text {
            margin: 10px 0;
        }
        .line {
            border-top: 1px solid black;
            margin: 20px 0;
        }
    </style>
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
</head>
<body>
    <div class="browser-bar">
        <div class="back-button">←</div>
        <div class="forward-button">→</div>
        <div class="close-button">×</div>
        <div class="home-button">⌂</div>
        <input type="text" value="http://tsociety.io/bootcamp" readonly>
        <div class="search-icon">🔍</div>
    </div>
    <div class="content">
        <div class="button" id="fadeOutButton">Fade Out</div>
        <div class="text" id="fadeOutText">When the button is clicked this text fades out.</div>
        <div class="line"></div>
        <div class="button" id="appendButton">Append</div>
        <div class="text" id="appendText">When the button is clicked append some text here.</div>
        <div class="line"></div>
        <div class="button" id="changeColorButton">Change Color</div>
        <div class="text" id="changeColorText">When the button is clicked change the text color to red.</div>
    </div>
</body>
</html>
