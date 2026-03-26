document.querySelector('.search button').addEventListener('click', () => {
    const searchInput = document.querySelector('.search input').value;
    checkWeather(searchInput);
});

async function checkWeather(city) {
    const API_KEY = 'c49ec8a62b0ec93415aa92d71d156904';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    try {
        const data = await response.json();
        const temp = Math.trunc(data.main.temp);
        const city = data.name;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        let cloud = data.weather[0].main.toLowerCase();
        
        cloud === 'haze' ? cloud = 'clouds' : cloud;

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.temp').innerHTML = `${temp}°C`;
        document.querySelector('.city').innerHTML = city;    
        document.querySelector('.humidity').innerHTML = `${humidity}%`;
        document.querySelector('.wind').innerHTML = `${wind} km/h`;
        document.querySelector('.weather-icon').src = `images/${cloud}.png`;
    } catch (error) {
        document.querySelector('.weather').style.display = 'none';
        document.querySelector('.error').style.display = 'block';
        // const parentElement = document.querySelector('.card');

        // const errorElement = document.createElement('div');
        // errorElement.classList.add('error');
        // errorElement.innerHTML = 'Invalid city name';

        // parentElement.insertAdjacentElement('beforeend', errorElement);

        
        // alert('hello');
    }
}