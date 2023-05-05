const APIKey = 'BgtuUrTT2I38R0K9MghVtXnxfs0v3jSe'
const getCityUrl = cityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
    try {
        const cityUrl = getCityUrl(cityName)
        const response = await fetch(cityUrl)

        if (!response.ok) {
            throw new Error('Data could not be reached.')
        }

        const [cityData] = await response.json()
        return cityData
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

getCityData('São Paulo')
    .then(console.log)