const APIKey = 'BgtuUrTT2I38R0K9MghVtXnxfs0v3jSe'
const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl = cityName =>
    `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityWeatherUrl = (cityKey) =>
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

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

const getCityWeather = async city => {
    const cityInforURL = getCityUrl(city)
    const [{ Key, LocalizedName }] = await fetchData(cityInforURL)
    const cityWeatherURL = getCityWeatherUrl(Key)
    const [cityWeather] = await fetchData(cityWeatherURL)

    return { ...cityWeather, LocalizedName }
}

