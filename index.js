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
</body>
</html>