NASA API Part II

We'll need to upgrade our NASA API assignments to improve the security and flexibility of the application.
Redesign your application such that:
    - Requests to the NASA API are made from your server with the `request` module, instead of from the front-end using jQuery.
    - Your API key should not be visible in any client-side code. It should only appear in the server code, where it is not visible to users.
    - When the user loads the page, it should not immediately display results from the NASA API for a specific day. Instead, the user should have to submit a form that lets them specify which day they want asteroid information about. You can send this extra information to the server using either a query string, or a request body.
-------------------------------------------------------------------------------------------
This assignment is meant to build your confidence and knowledge when it comes to navigating and implementing API’s. In order to bring in cool or desired features and data from other sources into your project, this is an important thing to practice. That being said, time for some celestial fact finding. Using the NASA open API, which can be found here:

https://api.nasa.gov/index.html#getting-started

my apiKey = S3PmfcdtXaoYuUfgeotZnnBPIM0aR73Tvc8h6Ae9
Account Email: colinjohnstell@gmail.com
Account ID: 64fe264b-cd04-476a-9734-b14541729dae

Read through the documentation.
- Create a web page that tells me what potentially hazardous asteroids were tracked over the last week: (dates exactly 7 days apart)
If you don't find many potentially hazardous asteroids over the last week, try looking at a different week that has multiple potentially dangerous asteroids.

- Build a section on this page for each asteroid.
- This section should include its velocity in MPH,
- it’s maximum diameter in feet,
- and it’s distance from earth.
- Bonus points if you somehow use this data to rank, color code, or otherwise display these on a scale from most to least dangerous sounding. This can simply be based on your intuition regarding very big rocks flying at earth and what you’d be more scared of.
