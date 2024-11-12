/*
이번 chapter 4는 함수를 다루고 있다. 매 챕터마다 시작부분에 셰익스피어의 글귀가 있다.
이번 챕터의 글귀는 '허나 죄란 어느 것이나 범행되기 전부터 처벌되기로 정해있는 것. 나의 직무(function)상 안 될 말이요'
이런이런.. 글귀에 function이 들어가서 남겼나보다.

함수.
자바스크립트에서 가장 좋은 점 중에 하나는 함수의 구현 부분이다.
함수는 실행 문장들의 집합을 감싸고 있다. 함수는 자바스크립트에서 모듈화의 근간이다.
코드의 재사용, 정보의 구성 및 은닉 등에 사용하고, 객체의 행위를 지정하는데도 사용한다.

*/


// 01. 함수 객체 : 함수는 객체다. 
// 객체 리터럴로 생성되는 객체는 Object.prototype에 연결됨. 반면 함수객체는 Function.prototype에 연결됨 (Function은 Object.prototype에 연결됨)
// 모든 함수는 2개의 추가 속성이 있다. 함수의 문맥과, 함수의 행위를 구현하는 코드(code)이다.
// 모든 함수 객체는 prototype이라는 속성이 있다. 이 속성의 값은 함수 자체를 값으로 갖는 constructor라는 속성이 있는 객체. 복잡하다.. 함수를 다른 객체와 구분 짓는 특징은 호출할 수 있다는 것.


// 02. 함수 리터럴 : 함수 객체는 함수 리터럴로 생성
var add = function(a, b) { //add라는 변수를 생성 후 두 수를 더하는 함수를 변수에 저장
    return a + b;
}

// 함수 리터럴에는 4가지 부분이 있음. 첫번째는 function이라는 예약어, 두번째는 함수이름(선택사항 임). 함수 이름은 함수를 재귀적으로 호출할 떄 사용. 디버거나 개발툴에서 함수를 구분할 때도 사용. 함수의 이름이 주어지지 않은 경우 익명함수라고 부름. 세번째는 괄호로 쌓인 매개변수 집합. 괄호안에 아예 비어잇거나 하나 이상의 매개변수를 쉼표로 분리해서 열거. 이 매개변수들은 함수내에서 변수로 정의. 일반적인 변수들은 undefined로 초기화하는 것과 달리 매개변수는 함수를 호출할떄넘겨진 인수로 초기화됨. 네번쨰는 중괄호로 둘러싸인 문장들의 집합. 이런 문장들은 함수의 몸체이며 호출했을때 실행됨. 함수 리터럴은 표현식이 나올 수 있는 곳이면 어디든지 위치 가능. 함수는 다른 함수 내에서도 정의 가능. 함수 리터럴로 생성한 함수 객체는 외부 문맥으로의 연결이 있는데 이를 클로저라고 함. 

// 03. 호출 : 모든 함수는 명시된 매개변수에 더해서 this와 arguments라는 추가적인 매개변수 2개를 받게된다. 이 매개변수의 값은 호출하는 패턴에 의해 결정됨. js에는 함수를 호출하는데 4가지 패턴이 잇음(메소드, 함수, 생성자, apply). 각 패턴에 따라 this라는 추가적인 매개변수를 다르게 초기화함.

// 호출 연산자는 한 쌍의 괄호. 괄호안에는 표현식 포함하거나, 1개 또는 쉼표로 2개 이상 표현식을 포함할수잇음. 각 표현식은 인수값 1개를 산출함. 인수와 매개변수의 개수가 일치하지 않아도 오류 발생 안함. 인수가 더 많으면 초과하는 인수는 무시됨. 인수가 매개변수보다 적으면 남는 매개변수에 undefined 할당. 

// 03-1 메소드 호출 패턴 (Method Invocation Pattern) : 함수를 개체의 속성에 저장하는 경우를 메소드라고 함. 메소드를 호출할 떄 this는 메소드를 포함하고 잇는 객체에 바인딩됨. this는 객체 자체가 됨. 호출 표현식은 마침표나 []를 포함하고 있으면 이 방법이 메소드 호출패턴.
// 아래코드 해석: value와 increment 메소드가 있는 myObject 생성, increment 메소드의 매개변수는 선택적, 인수가 숫자가 아니면 1이 기본값임
var myObject = {
    value: 0,
    increment : function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() { //하단 getValue에서 에러나서 추가함.
        return this.value;
    }
};

myObject.increment();
console.log("myObject.value::increment()임:::" + myObject.value); //1

myObject.increment(2);
console.log("myObject.value::increment(2)임:::" + myObject.value); //3

// 위 코드를 아래와 같이 작성할 수 있음.
myObject["increment"]()
console.log("myObject.value::increment()임:::" + myObject.value);

myObject["increment"](2)
console.log("myObject.value::increment(2)임:::" + myObject.value);


// 메소드는 자신을 포함하는 객체의 속성들에 접근하기 위해서  this사용. this사용해서 객체의 값을 읽거나 변경함. this와 객체 바인딩은 호출시에 일어남.  자신의 객체 문맥을 this로 얻는 메소드를 퍼블릭 메소드라고 함.
// 03-2 함수 호출 패턴 : 함수가 객체 속성이 아닌 경우 함수로서 호출함 (뭔말이야 이게 ; GPT에게 물어보니.. 함수를 독립적으로 호출하는 경우를 말함)
var sum = add(3,4);
console.log('sum:::', sum) //합 7
// 함수를 이 패턴으로 호출하면 this는 전역객체에 바인딩됨. 이런 특성은 언어 설계 단계에서의 실수라고 함. 언어를 바르게 설계햇다면 내부 함수 호출시 함수의 this는 외부 함수의 this 변수에 바인딩되어야함. 이 오류결과는 메수드가 내부 함수 사용하여 자신의 작업을 돕지 못한다는 것.(뭔소리야 이게) 왜냐면 내부 함수는 메소드가 객체 접근을 위해 사용하는 this에 자신의 this를 바인딩하지 않고 엉뚱한 값(전역객체)에 연결하기 떄문. 대안이 있음.! 메소드에서 변수를 정의한 후 여기에 this를 할당하고 내부 함수는 이 변수를 통해 메소두의 this에 접근하는 방법. 

// myObject에 double 메소드 추가
myObject.double = function () {
    var that = this; //대안

    var helper = function () {
        that.value = add(that.value, that.value);
    }
    helper(); //helper를 함수로 호출
}

// double을 메소드로 호출
myObject.double();
console.log(myObject.getValue()); //6

// 03-3 생성자 호출 패턴 : 객체는 자신의 속성들을 다른 객체에 바로 상속할 수 잇다. 함수를 new라는 전치 연산자와 함께 호출하면 호출한 함수의 프로토타입 속성의 값에 연결되는 (숨겨진) 링크를 갖는 객체가 생성. 이 새로운 객체는 this에 바인딩됨. new라는 전치 연산자는 return 문장 동작을 변경. 

// Quo라는 생성자 함수 생성. 이 함수는 status라는 속성을 가진 객체 생성
var Quo = function (string) {
    this.status = string;
}

// Quo의 모든 인스턴스에 get_status라는 public메소드를 줌.
Quo.prototype.get_status= function () {
    return this.status;
}

// Quo의 인스턴스 생성
var myQuo = new Quo("confused");
console.log(myQuo.get_status()); //confused

// new라는 전치 연산자와 함께 사용하도록 만든 함수를 생성자 라고 한다. 일반적으로 생성자는 이니셜을 대문자로 표기. new없이 호출하면 컴파일 시간, 실행시간에 어떠한 경고도 없어서 알수없는 결과 초래. 그래서 대문자 표기법 사용하여 해당 함수가 생성자라고 구분하는 것 매우 중료. 생성자 함수 사용하는 스타일은 권장 사항 아님.

// 03-4 apply 호출 패턴 : js는 함수형 객체지향 언어이기 때문에 함수는 메소드를 가질 수 있음. apply메소드는 함수를 호출할때 사용할 인수들의 배열을 받아들임.(뭔소리야.) 이 메소드는 this값을 선택할수잇게 도움. apply메소드에는 매개변수2개잇음. 첫번째는 this에 묶이게 될 값, 두번째는 매개변수들의 배열. 

//숫자 2개 가진 배열만들고 이를 더함.
var array = [3, 4];
var applySum = add.apply(null, array);

console.log(applySum); // 합은 7 

// status라는 속성을 가진 객체 만듦
var statusObject = {
    status: 'A-OK'
}

// statusObject는 Quo.prototype을 상속받지 않지만, Quo의 get_status 메소드가 statusObject를 대상으로 실행되도록 호출 할 수 잇음
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status); // 결과 : A-OK


///////////////////////////////////////////////////////////////////////////////////
