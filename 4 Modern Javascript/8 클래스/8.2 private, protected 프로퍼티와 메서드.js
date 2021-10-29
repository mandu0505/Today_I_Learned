// 내부 인터페이스 : 동일한 클래스 내의 다른 메서드에선 접근할 수 있지만, 클래스 밖에선 접근할 수 없는 프로퍼티와 메서드
// 외부 인터페이스 : 클래스 밖에서도 접근 가능한 프로퍼티와 메서드

/*
커피 머신으로 비유하자면 기계 안쪽에 숨어있는 뜨거운 물이 지나가는 관이나 발열 장치 등이 내부 인터페이스가 될 수 있음
내부 인터페이스의 세부사항들은 서로의 정보를 이용하여 객체를 동작시킴. 
발열 장치에 부착된 관을 통해 뜨거운 물이 이동하는 것이 예시.

그런데 커피 머신은 보호 커버에 둘러싸여 있기 때문에 보호 커버를 벗기지 않고는 커피머신 외부에서 내부로 접근할 수 없음
밖에선 세부 요소를 알 수 없고, 접근도 불가능. 내부 인터페이스의 기능은 외부 인터페이스를 통해야만 사용할 수 있음.

이런 특징 때문에 외부 인터페이스만 알아도 객체를 가지고 무언가를 할 수 있음
객체 안이 어떻게 동작하는지 알지 못해도 괜찮다는 점은 큰 장점으로 작용.
*/

//--------------------------------------------------------------------------------------------------------------
public  // 어디서든지 접근할 수 있으며 외부 인터페이스를 구성 (지금까지 다룬 모든 프로퍼티와 메서드는 public)
private // 클래스 내부에서만 접근할 수 있으며 내부 인터페이스를 구성할 때 사용 (#로 시작)
protected-field // private과 비슷하지만, 자손 클래스에도 접근이 가능하다는 점이 다름. (private보다 조금 더 광범위하게 사용)
// (JS는 protected field를 지원하지않지만, protected를 사용하면 편리한 점이 많기에 이를 모방해서 사용하는 경우가 많음)


프로퍼티보호하기-protected;
예시1;
class CoffeeMachine {
    _waterAmount = 0;   // 밑줄(_)을 추가해 public에서 protected field로 변경 
    // (밑줄은 외부 접근이 불가능한 프로퍼티나 메서드를 나타낼 때 사용)

    setWaterAmount(value) {
        if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
        this._waterAmount = value;
    }
    getWaterAmount() {
        return this._waterAmount;
    }
}
new CoffeeMachine().setWaterAmount(100); // 커피 머신 생성 


//--------------------------------------------------------------------------------------------------------------
읽기전용프로퍼티; // 한번 값을 할당한 후 이후 절대 바꾸지 말아야 하는 경우 사용 (setter[설정자]말고 getter[획득자]만 생성)
예시1;
class CoffeeMachine {
    constructor(power) {  
        this._power = power;  // 읽기만 가능한 power 프로퍼티 생성 : 프로퍼티를 생성할 때만 값을 할당할 수 있고, 이 후 불가능
    }
    get power() { 
        return this._power;
    }
}
let coffeeMachine = new CoffeeMachine(100); // 커피 머신 생성

console.log(`전력량이 ${coffeeMachine.power}인 커피머신을 만듭니다.`); // 전력량이 100인 커피머신을 만듭니다.

coffeeMachine.power = 25; // Error (setter 없으므로 변경 불가능)


//--------------------------------------------------------------------------------------------------------------

