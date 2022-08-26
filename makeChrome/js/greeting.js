const loginForm = document.querySelector("#login-form")
const loginInput =document.querySelector('#login-form input')
const greeting=document.querySelector('#greeting')

// 반복 문자
const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

// 로그인 시 인사 함수
function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

// 로그인시 username 로컬 저장 함수
function onLoginSubmit(event) {
  event.preventDefault()
  
  loginForm.classList.add(HIDDEN_CLASSNAME)

  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY , username)
  paintGreeting(username)

  console.log(username)
}

loginForm.addEventListener("submit", onLoginSubmit)


// username 로컬 저장 유무에 따른 로직

const savedUsername = localStorage.getItem(USERNAME_KEY)
  // 로컬에 데이터 없으 시 loginForm 표시
if (savedUsername === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  // 로컬에 데이터 있을 시 자동으로 username 표시
  paintGreeting(savedUsername)
  
}