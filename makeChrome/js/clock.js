// 시계
// new Date() : 날짜,시간 표시 객체
  // getDate() 
  // getHours()
  // getMinutes()
  // getSeconds()
// padStart(길이, 표시내용) : String 최소길이 미충족시 가장 앞에 내용 추가

const clock =document.querySelector("h2#clock")

function getClock() {
  const date = new Date()
  const hours = String(date.getHours()).padStart(2,'0')
  const minutes = String(date.getMinutes()).padStart(2,'0')
  const seconds = String(date.getSeconds()).padStart(2,'0')
  // const milliseconds = String(date.getMilliseconds())[0]
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}
getClock()
setInterval( getClock ,1000)

console.log(typeof String(new Date().getSeconds()))


console.log(parseInt(2.8))

