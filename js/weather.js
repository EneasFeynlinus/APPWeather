const APIKey = 'BgtuUrTT2I38R0K9MghVtXnxfs0v3jSe'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = ({ Key }) =>
    `${baseUrl}currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Data could not be reached.')
        }

        return await response.json()
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather = async cityName => {
    const [cityData] = await getCityData(cityName)
    return await fetchData(getCityWeatherUrl(cityData))
}

