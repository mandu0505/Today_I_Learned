//리팩토링 = 비효율적인 코드를 효율적으로 만들어서 가독성을 높이고 유지보수가 쉽도록 만드는 것.


// 1) 버튼 토글 코드:
  if(document.querySelector('#night_day').value === 'night') {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      document.querySelector('#night_day').value = 'day';
  }
    else {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('#night_day').value = 'night';
  }


//------------------------------------------------------------------------------------------------------------------------------------------
// 만약 위에 토글을 하나 더 만들어야 한다면 새로운 id값을 적용해야함 (id<#>는 하나의 태그에만 적용될 수 있으므로)
// eg: #night_day를 #night_day2로 일일히 바꿔줘야함 
// JS는 자기 자신을 가리키기 위한 this라는 키워드가 있음 
// document.querySelector('#night_day') 대신 this를 쓰면 됨. 게다가 this는 몇 번을 복사해서 붙여넣더라도 따로 수정없이
// 계속 사용할 수 있음 --> 여러 같은 버튼 생성이 가능하다는 뜻

// 2) this를 사용한 코드:

if(this.value === 'night') {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
    this.value = 'day';
}
  else {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    this.value = 'night';
}

//------------------------------------------------------------------------------------------------------------------------------------------
// 그럼에도 불구하고 위 코드는 중복이 아직도 많음 : document.querySelector('body').
// 코딩에서 중복을 없애주는 것은 매우 중요함 

// 3) 리팩토링/중복 제거한 코드(변수 활용):

var body = document.querySelector('body');
if(this.value === 'night') {
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  this.value = 'day';
}
else {
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  this.value = 'night';
}
