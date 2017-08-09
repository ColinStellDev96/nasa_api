$(document).ready(function (){

    $.get('/dataCall', function (data){
        var nearEarth = data.near_earth_objects; // var for getting into the data of 'near_earth_objects' & date's.
        // console.log(nearEarth);

        var trueDanger = []; // empty array for our next step.
        for (date in nearEarth){ //looping through the week's dates.
            for (let i=0; i < nearEarth[date].length; i++) { //looping through to grab data of potentially hazerdous asteroids.
                if (nearEarth[date][i].is_potentially_hazardous_asteroid === true)
                trueDanger.push(nearEarth[date][i]); // pushing potentially hazerdous asteroids into our emtpy array from above.
            }
        }
        // console.log(trueDanger); // console log to see that I got the right data.
        for (let i=0; i < trueDanger.length; i++) { //looping through potentially dangerous asteroid data to append to site.
        $('#asteroidData').append(`
                <tr>
                    <td>${trueDanger[i].name}</td>
                    <td>${trueDanger[i].estimated_diameter.feet.estimated_diameter_max}</td>
                    <td>${trueDanger[i].close_approach_data[0].miss_distance.miles}</td>
                    <td>${trueDanger[i].close_approach_data[0].relative_velocity.miles_per_hour}</td>
                </tr>
        `);
      }

    });
    // console.log(backData);


    // pulled data for one week of asteroid data: July 27, 2017 - August 2, 2017
    // $.ajax({
    //     method:'GET',
    //     url: 'ttps://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-27&end_date=2017-08-02&detailed=true&api_key=S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9',
    //     success: function(data) {
    //         // console.log(data);
    //         var nearEarth = data.near_earth_objects; // var for getting into the data of 'near_earth_objects'.
    //         var trueDanger = []; // empty array for our next step.
    //         for (date in nearEarth){ //looping through the week's dates.
    //             for (let i=0; i < nearEarth[date].length; i++) { //looping through to grab data of potentially hazerdous asteroids.
    //                 if (nearEarth[date][i].is_potentially_hazardous_asteroid === true)
    //                 trueDanger.push(nearEarth[date][i]); // pushing potentially hazerdous asteroids into our emtpy array from above.
    //             }
    //         }
    //         // console.log(trueDanger); // console log to see that I got the right data.
    //         for (let i=0; i < trueDanger.length; i++) { //looping through potentially dangerous asteroid data to append to site.
    //         $('#asteroidData').append(`
    //                 <tr>
    //                     <td>${trueDanger[i].name}</td>
    //                     <td>${trueDanger[i].estimated_diameter.feet.estimated_diameter_max}</td>
    //                     <td>${trueDanger[i].close_approach_data[0].miss_distance.miles}</td>
    //                     <td>${trueDanger[i].close_approach_data[0].relative_velocity.miles_per_hour}</td>
    //                 </tr>
    //         `);
    //       }
    //     }
    // });
}); // document.ready close
