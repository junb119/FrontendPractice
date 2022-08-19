const searchEl = document.querySelector('.search')
const searchInputEl= searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () { // focus되면
  searchEl.classList.add('focused'); // 클래스에 'focused'추가
  searchInputEl.setAttribute('placeholder', '통합검색') // setAttribute : 속성추가
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '')
})


// gsap과 lodash를 이용해 스크롤에 따라 사라지는 뱃지 만들기

const badgeEl = document.querySelector('header .badges')

// window 객체 : 화면
// lodash의 throttle 메소드 : 스크롤할시 0.3초마다 function 실행
window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY)
  if (window.scrollY > 500) {  // window.scroll의 Y값이 500이 넘으면 뱃지 숨기기
    // gsap.to(요소, 지속시간,옵션) : 애니메이션처리
    gsap.to(badgeEl, .6 , {
      opacity: 0,
      display : 'none'
      })
  } else {
    gsap.to(badgeEl, .6 , {
      opacity: 1 , 
      display : 'block'
    });
    // 뱃지 보이기
  }
}, 300));

const fadeEl = document.querySelectorAll('.visual .fade-in')
fadeEl.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  })

});
