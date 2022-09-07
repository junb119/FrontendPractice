const toDoForm = document.querySelector('#todo-form') 
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector('#todo-list')

const TODOS_KEY = 'todos'

let toDos = []

function saveToDos(){   // toDo를 localStorage 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

// 'submit'
function handleToDoSubmit(event) {
  event.preventDefault() // submit 새로고침 방지
  const newTodo = toDoInput.value 
  toDoInput.value = ''
  const newTodoObj = { 
    text:newTodo,
    id:Date.now()
  }
  toDos.push(newTodoObj) 
  paintTodo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener('submit', handleToDoSubmit)

// todo list 생성
function paintTodo(newTodo) {
  const li = document.createElement('li') // li 태그 생성
  li.id= newTodo.id
  const span =document.createElement('span') // span 태그 생성
  span.innerText = newTodo.text // span태그 텍스트 = toDoInput.value(newTodo) 

  const button = document.createElement('button') // button 태그 생성
  button.innerText = 'X'
  button.addEventListener('click', deleteTodo) // 버튼 클릭- 삭제

  li.appendChild(span) // li태그 하위에 span태그 지정
  li.appendChild(button)
  toDoList.appendChild(li) // 생성한 li 태그 입력
}

// todo list 삭제
function deleteTodo(event) {
  const li = event.target.parentElement
  li.remove()  
  toDos = toDos.filter( (todo) => todo.id !== parseInt(li.id) )
  saveToDos()
}

// todo 저장하기
const savedToDos = localStorage.getItem(TODOS_KEY) // localStorage item 가져오기

if (savedToDos !== null) {   // localStorage에 item에 있으면
  const parsedToDos = JSON.parse(savedToDos) 
  toDos = parsedToDos   // toDos array에 할당()
  parsedToDos.forEach(paintTodo)
  }
