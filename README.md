# ch06_weather_app

![weather_app](https://user-images.githubusercontent.com/108424256/186527426-aa0418b5-3d38-4ed6-9f7c-b2735f60ccc0.png)

TITLE: Weather Application
AUTHOR: Scott Rinaberger

LINKS:
    ** HTTP URL Link: https://rinaberger.github.io/ch06_weather_app/
    ** GitHub URL: https://github.com/Rinaberger/ch06_weather_app.git



USER STORY
    AS A traveler
        I WANT to see the weather outlook for multiple cities
        SO THAT I can plan a trip accordingly


ACCEPTANCE CRITERIA

    GIVEN a weather dashboard with form inputs
        WHEN I search for a city
        THEN I am presented with current and future conditions for that city and that city is added to the search history

        WHEN I view current weather conditions for that city
        THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

        WHEN I view the UV index
        THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

        WHEN I view future weather conditions for that city
        THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

        WHEN I click on a city in the search history
        THEN I am again presented with current and future conditions for that city