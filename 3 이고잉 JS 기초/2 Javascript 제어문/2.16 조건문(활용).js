/* 조건문 : 프로그램이 조건에 따라서 다른 기능들이 다른 순서에 따라서 실행되도록 만들어줌. 
(단순하고 반복적인 업무 뿐만 아니라 복잡한 업무까지도 컴퓨터가 다룰 수 있도록 해줌-->효율적인 코드 작성 가능/사용자의 목적) 


/* 조건문에서의 조건 = 비교연산자,boolean(비교연산자를 통해 두 값을 비교하고, 그 결과를 불리언을 통해 알아내 조건으로 이용)
* 동등 비교 연산자: === (왼쪽과 오른쪽이 같은지 판단) <1===1; true>, <1===2; false>;
* 비교 연산자: <,> (크기를 서로 비교)
* 비교 연산자를 사용하여 나온 결과 true 혹은 false = boolean 데이터타입 */


//----------------------------------------------------------------------------------------------
//버튼 예시

<input id="night_day" type="button" value="night"></input>           //버튼 생성

if(document.querySelector('#night_day').value === 'night') {         //버튼의 value===night이면,
  document.querySelector('body').style.backgroundColor = 'black';  //배경색을 검은색으로
  document.querySelector('body').style.color = 'white';            //글씨색을 하얀색으로
  document.querySelector('#night_day').value = 'day';              //버튼의 value는 day로 변경
  }
else {                                                             //버튼의 value===night이 아니라면,
  document.querySelector('body').style.backgroundColor = 'white';  //배경을 하얀색으로
  document.querySelector('body').style.color = 'black';            //글씨색을 검은색으로
  document.querySelector('#night_day').value = 'night';            //버튼의 value는 night로 변경
}


//예시 1:
var age = 25;

function is20s(age) {
    if (age < 20) {
        console.log("미성년자입니다. ");
    } else {
        console.log("성인입니다. ");  
    }
}

//---------------------------------------------------------------------------------------------
//예시 2:

function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}
//--> 위의 예시는 아래처럼 더욱 효과적으로 작성 가능

function isLeapYear(year) {
    return (year % 4 == 0);
}

//----------------------------------------------------------------------------------------------
//예시 3

var a = Math.ceil(Math.random()*10); // Math.random = 0~1사이의 실수를 생성, Math.ceil = 실수를 정수로 올림
var b = Math.ceil(Math.random()*10); // --> 0~10 사이의 실수를 생성후 정수로 변환
var solution = a * b;
var ans;
ans = parseInt(prompt(a+"*"+b+"=?"));  //입력받기
if (ans == solution) {                 //if 조건문을 이용해 정답을 비교
    console.log("맞았습니다.");
} else {
    console.log("틀렸습니다.")
}