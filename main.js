$(document).ready(function (){

    // DATA from 7-27-2017 through 8-02-2017 (Asteroids Close To Earth);
    // $.get('ttps://api.nasa.gov/neo/rest/v1/feed?start_date=2017-08-01&end_date=2017-08-01&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9').then(function (data){
    //     console.log(data);
    // });

    $.ajax({
        method:'GET',
        url: 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-27&end_date=2017-08-02&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
        success: function(data) {
            console.log(data);
            var nearEarth = data.near_earth_objects;

            var trueDanger = [];
            for (var property in nearEarth) {
                if (nearEarth[property].is_potentially_hazardous_asteroid === true)
                trueDanger.push(nearEarth[key]);
            } console.log(trueDanger);
        }
    });



    // $.ajax({
    //     method:'GET',
    //     url: 'ttps://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-31&end_date=2017-07-31&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
    //     success: function(data) {
    //             // console.log(JSON.stringify(result));
    //
    //         var nearEarth = data.near_earth_objects;
    //         var newEarthDate = (nearEarth['2017-07-31']);
    //
    //         var trueDanger = []; /*Asteroids With Potential Hazard True */
    //         for(var key in newEarthDate){
    //             if (newEarthDate[key].is_potentially_hazardous_asteroid){
    //                 trueDanger.push(newEarthDate[key]);
    //             }
    //         } console.log(trueDanger);
    //
    //
    //         for (let i=0; i < trueDanger.length; i++) {
    //             $('#asteroidData').append(`
    //                 <td>${trueDanger[i].name}</td>
    //                 <td>${trueDanger[i].estimated_diameter.feet.estimated_diameter_max}</td>
    //                 <td>${trueDanger[i].close_approach_data[0].miss_distance.miles}
    //                 <td>${trueDanger[i].close_approach_data[0].relative_velocity.miles_per_hour}</td>
    //             `);
    //         }



        });
