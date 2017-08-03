$(document).ready(function (){

    // DATA from 7-27-2017 through 8-02-2017 (Asteroids Close To Earth);
    $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-27&end_date=2017-08-02&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9').then(function (data){
        // console.log(data);
    });

    // ASTEROID ONE (2017-07-27)
    $.get("https://api.nasa.gov/neo/rest/v1/neo/3772382?api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9").then(function(dataA1){
        console.log(dataA1);
        
    });






    // ASTEROID TWO:


    // ASTEROID THREE:



});
