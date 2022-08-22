// header - Search 

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


// 메인 첫화면 애니메이션
const fadeEl = document.querySelectorAll('.visual .fade-in')
fadeEl.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  })

});


// 공지사항
// Swiper(선택자, 옵션)

new Swiper('.notice-line .swiper', {             
  direction : 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper' , { 
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수(default : 1 )
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop : true, 
  autoplay : {
    delay : 5000 // 5초
  },

  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})