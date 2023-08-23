<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./Assets/style.css">
    <title>Day Planner</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid head">
        <h1 class="display-4 text-center">Day Planner</h1>
        <p class="lead text-center">A simple calendar app for scheduling your work day</p>
        <button class="btn btn-warning" style="margin-bottom:1em" id="clearBtn">Clear</button>
    </div>
    <div class="container main">
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                9am
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='9' id='div9'></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn9"></button>
        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                10am
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='10' id="div10"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn10"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                11am
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='11' id="div11"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn11"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                12am
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='12' id="div12"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn12"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                1pm
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='13' id="div1"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn1"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                2pm
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='14' id="div2"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn2"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                3pm
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='15' id="div3"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn3"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                4pm
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='16' id="div4"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn4"></button>

        </div>
        <div class='row time-block'>
            <div class="hour col-xs-2 col-sm-2 col-md-2 col-lg-2">
                5pm
            </div>
            <textarea class="future col-xs-9 col-sm-9 col-md-9 col-lg-9 description" data-hour='17' id="div5"></textarea>
            <button class="col-xs-1 col-sm-1 col-md-1 col-lg-1 fas fa-save btn-block saveBtn" id="btn5"></button>

        </div>

    </div>

    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="./Assets/script.js"></script>
</body>
</html>