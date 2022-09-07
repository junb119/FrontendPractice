// 백그라운드 이미지

const image = ['0.jpeg' ,'1.jpeg', '2.jpeg' ]
const chosenImage = image[Math.floor(Math.random() * image.length)] // 랜덤 이미지 객체


const bgImage = document.createElement('img') // img HTML 태그 생성
bgImage.src = `img/${chosenImage}` // img 태그 프로퍼티 지정(랜덤이미지 객체)


document.body.appendChild(bgImage) // HTML body 마지막에 추가