$(document).ready(function (){

    // DATA from 7-27-2017 through 8-02-2017 (Asteroids Close To Earth);
    // $.get('ttps://api.nasa.gov/neo/rest/v1/feed?start_date=2017-08-01&end_date=2017-08-01&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9').then(function (data){
    //     console.log(data);
    // });

    $.ajax({
        method:'GET',
        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-08-01&end_date=2017-08-01&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
        success: function(data) {
                // console.log(JSON.stringify(result));
            var nearEarth = data.near_earth_objects;
            var newEarthDate = (nearEarth['2017-08-01']);

            var trueDanger = [];
            for(var key in newEarthDate){
                if (newEarthDate[key].is_potentially_hazardous_asteroid){
                    trueDanger.push(newEarthDate[key]);
                }
            } console.log(trueDanger);

            // how can I dinamically populate my dom using jquery.



            for (var key in nearEarth){
                // console.log(nearEarth[key]['0'].is_potentially_hazardous_asteroid);
                // console.log(nearEarth['2017-08-01']['0'].is_potentially_hazardous_asteroid);
            }

        }
    });


    // ASTEROID ONE:

    // $.get('ttps://api.nasa.gov/neo/rest/v1/neo/3772382?api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9').then(function (dataA1){
    //     console.log(dataA1);
    // });

    // $.ajax({
    //     method:'GET',
        // url: 'ttps://api.nasa.gov/neo/rest/v1/neo/3772382?api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
    //     success: function(result) {

            // $('#asteroidData').append('<td>' + result.name + '</td>');
            // $('#asteroidData').append('<td>' + result.estimated_diameter.feet.estimated_diameter_min + " feet wide" + '</td>');
            // $('#asteroidData').append('<td>' + result.close_approach_data[9].miss_distance.miles + " miles away" + '</td>');
            // $('#asteroidData').append('<td>' + result.close_approach_data[9].relative_velocity.miles_per_hour + " mph" + '</td>');
    //     }
    // });

    // ASTEROID TWO:


    // ASTEROID THREE:


});
