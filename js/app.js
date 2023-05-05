const cityForm = document.querySelector('[data-js="change-location"]')

cityForm.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    const cityData = await getCityData(inputValue)
    console.log(cityData)
})