
//connect apikey to openweathermap
    let apiKey= "7094871f6de819aa05250daa8c9a7028"
    let fiveDayBox = document.getElementById('fiveDayBox')

// Get city/state data
var getLocation = async (city) => {
    var url =`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
    var response = await fetch(url);
    var data = await response.json();

    if (data.length > 0) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        var city = data[0].name
        getWeatherData(lat, lon, city);
    } else {
        alert('Please enter a valid city and state');
    }
}

var getWeatherData = async(lat, lon, city) => {
    var url =`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&contd=&appid=${apiKey}`
    var response = await fetch(url);
    var data = await response.json();
    console.log(data);

    if (data) {
        document.querySelector('.current_city').textContent = city
        document.querySelector('.current_date').textContent = moment().format('dddd,  ' + '  MMMM Do YYYY')
        document.querySelector('.current_temp').textContent = 'Temp: ' + data.current.temp + ' F'
        document.querySelector('.current_wind').textContent = 'Windspeed: ' + data.current.wind_speed + ' MPH'
        document.querySelector('.current_humid').textContent ='Humidity: ' + data.current.humidity + '%'
        document.querySelector('.current_UV').textContent = 'UV Index: ' + data.current.uvi


        fiveDayBox.textContent = ''
        for (var i = 0; i < 5; i++) {
            var box = document.createElement('div')
            box.classList.add('fiveday')
            fiveDayBox.append(box)

            var fiveDayDate = document.createElement('h4')
            fiveDayDate.classList.add('day')
            fiveDayDate.textContent = moment().add(i + 1, 'days').format('dddd')
            box.append(fiveDayDate)

            /*
            var fiveDayIcon = document.createElement('p')
            fiveDayIcon.classList.add('icon')
            fiveDayIcon.textContent = data.daily[i].weather.o.icon
            box.append(fiveDayIcon) */

            var fiveDayTemp = document.createElement('p')
            fiveDayTemp.classList.add('other')
            fiveDayTemp.textContent = 'Temp: ' + data.daily[i].temp.day + ' F'
            box.append(fiveDayTemp)

            var fiveDayWind = document.createElement('p')
            fiveDayWind.classList.add('other')
            fiveDayWind.textContent = 'Wind Speed: ' + data.daily[i].wind_speed + ' MPH'
            box.append(fiveDayWind)

            var fiveDayHumid = document.createElement('p')
            fiveDayHumid.classList.add('other')
            fiveDayHumid.textContent = 'Humidity: ' + data.daily[i].humidity + '%'
            box.append(fiveDayHumid)
        }
    }
};

var storedCities = document.getElementById('storedCity')
var getHistory = () => {
    var storage = JSON.parse(localStorage.getItem('weatherHistory'))
    storedCities.textContent = ''
    if (storage === null) {
        storedCities.textContent = '  No Previous Searches'
        return
    }

    for(var i = 0; i < storage.length; i++) {
        var historyBtn = document.createElement('button')
        historyBtn.textContent = storage[i]
        historyBtn.classList.add('history-btn')
        storedCities.append(historyBtn)

        historyBtn.addEventListener('click', (e) => {
            getLocation(e.target.textContent)
        })
    }
}

getHistory()

var storeCity = (city) => {
    var storage = JSON.parse(localStorage.getItem('weatherHistory'))
    if (storage === null) {
        storage = []
    }

    storage.push(city)
    localStorage.setItem('weatherHistory', JSON.stringify(storage))
    getHistory()
}

//Capture Input
document.getElementById("searchBtn").addEventListener("click", function () {
    var city = document.getElementById('inputCity').value;
    if (city === '') {
        alert('Must search for city')
        return
    }
    console.log(city);
    getLocation(city);
    storeCity(city);
})


