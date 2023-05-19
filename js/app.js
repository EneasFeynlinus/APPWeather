const cityForm = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="city-card"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')

const showCityWeather = async event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    const [{ LocalizedName, Key }] = await getCityData(inputValue)
    const [{ WeatherText, Temperature, IsDayTime, WeatherIcon }] = await getCityWeather(Key)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

    timeImg.src = IsDayTime ? './src/day.svg' : './src/night.svg'
 
    cityCard.classList.remove('d-none')
    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent = WeatherText
    cityTemperatureContainer.textContent = Temperature.Metric.Value

    console.log(WeatherText, Temperature.Metric.Value)
    cityForm.reset()
}

cityForm.addEventListener('submit', showCityWeather)

