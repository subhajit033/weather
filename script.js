const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '01e0da5971msh943f17c7186b96ap153398jsnf7b3f0ffd11d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
const get_weather = (city) => {
    document.getElementById('city-name').innerHTML = city;

    let api_respone = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
    api_respone.then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);
        // cloud_pct = response.cloud_pct;
        // temp = response.temp;
        // feels_like = response.feels_like;
        // humidity = response.humidity;
        // min_temp = response.min_temp;
        // max_temp = response.max_temp;
        // wind_speed = response.wind_speed;
        // wind_degrees = response.wind_degrees;
        // sunrise = response.sunrise;
        // sunset = response.sunset;
        document.getElementById('temp').innerHTML = response.temp + ' deg';
        document.getElementById('min_temp').innerHTML = response.min_temp + ' deg';
        document.getElementById('max_temp').innerHTML = response.max_temp + ' deg';
        document.getElementById('feels_like').innerHTML = response.feels_like + ' deg';
        document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
        document.getElementById('sunset').innerHTML = response.sunset;
        document.getElementById('sunrise').innerHTML = response.sunrise;
        document.getElementById('wind_degrees').innerHTML = response.wind_degrees + 'deg';
        document.getElementById('wind_speed').innerHTML = response.wind_speed + ' km/hr';
        document.getElementById('humidity').innerHTML = response.humidity;
    }).catch((err) => {
        console.log(err);
    })
};
document.getElementById('submit').addEventListener('click', function(e){
    let city_name = document.getElementById('city').value;
    e.preventDefault();
    get_weather(city_name);
})