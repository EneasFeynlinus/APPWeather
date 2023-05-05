const APIKey = 'BgtuUrTT2I38R0K9MghVtXnxfs0v3jSe'
const getCityUrl = cityName =>
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

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


getCityData('São Paulo')
    .then(console.log)

// const getWeatherData = async cityName => {
//     try {
//         const { Key } = await getCityData(cityName)
//         const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
//         const response = await fetch(weatherUrl)

//         if (!response.ok) {
//             throw new Error('Data could not be reached.')
//         }

//         const weatherData = await response.json()
//         return weatherData
//     } catch ({ name, message }) {
//         alert(`${name}: ${message}`)
//     }
// }

// getWeatherData('São Paulo')
//     .then(console.log)