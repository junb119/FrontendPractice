function onGeoOk(position) {
  const API_KEY = '56ec0c673cf18fa8e7828129fe8de2f2'
  
  const lat = position.coords.latitude //  위도
  const lng = position.coords.longitude // 경도
  console.log('You live in', lat, lng)
  // https://api.openweathermap.org/data/2.5/weather?lat=$35.8593839&lon=$128.5795303&appid=56ec0c673cf18fa8e7828129fe8de2f2&units=metric
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then( (response) => response.json())
  .then( (data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")

      city.innerText = data.name
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
  })
}

function onGeoError() {
  alert("Can't find you, No Weather for you.")

}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError) // 위치좌표


