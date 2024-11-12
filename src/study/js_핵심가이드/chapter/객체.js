/*
숫자, 문자열, 불리언, null, undefined 를 제외한 다른 값들은 모두 객체.
JS의 객체는 변형 가능한 속성들의 집합.
배열, 함수, 정규 표현식 등.

개체는 이름과 값이 있는 속성을 포함하는 컨테이너 역할.
이름은 문자열이면 모두 가능(빈 문자열 가능), 값은 undefined를 제외한 모든 값 가능(값은 어떠한 표현식도 가능. 객체 리터럴도 가능:중첩 객체)

객체 하나에 있는 속성들을 다른 객체에 상속하게 해주는 prototype 연결 특성이 있음.
*/


// 01. 객체 리터럴 : 새로운 객체를 생성할 때 편리한 표기법 제공. 중괄호로 표기. 표현식이 있을 수 있는 곳이면 어디라도 위치할 수 있음.
// 속성값으로 개게 리터럴이 중첩으로 들어가도 됨
var empty_object = {};

var stooge = {
    "first-name": "HONG",
    "last-name": "GILDONG"
}

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2024-10-08 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2024-11-08 10:42",
        city: "Los angeles"
    }
};

// 02. 속성값 읽기 : 속성 이름 대괄호[]로 둘러싼 형태. 마침표 표기법을 사용하면 간단하고 읽기 편함
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

console.log("stooge['first-name']:::" + stooge["first-name"]); //HONG
console.log("flight.departure.IATA:::" + flight.departure.IATA); //SYD

console.log("stooge['middle-name']:::" + stooge["middle-name"]); //undefined
console.log("stooge['FIRST-NAME']:::" + stooge["FIRST-NAME"]); //undefined
console.log("flight.status:::" + flight.status); //undefined

// 03. 속성값 갱신
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model : 'Boeing 777'
};

flight.status = 'overdue';

console.log("****middle-name,nickname,flight.equipment 선언****");
console.log("flight.equipment:::" + flight.equipment); //[object Object]
console.log("flight.equipment.model:::" + flight.equipment.model); //Boeing 777
console.log("flight.equipment && flight.equipment.model:::" + flight.equipment && flight.equipment.model); //Boeing 777
console.log("flight.equipment && flight.equipment.model:::" + (flight.equipment && flight.equipment.model)); // Boeing 777 : 2개의 코드 차이점은 괄호를 추가해 연산 순서를 명확히 했다는 것!


stooge['first-name'] = 'Park';

console.log(stooge["first-name"]); //Park

// 04. 참조 : 객체는 참고 방식으로 전달됨. 결코 복사되지 않음.
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname; // x과 stooge가 모두 같은 객체를 참조

var a = {}, b = {}, c = {}; // a, b, c는 각각 다른 빈 객체를 참조
a = b = c = {}; // a, b, b는 모두 같은 객체를 참조

console.log("x.nickname:::" + nick); //Curly

// 05. 프로토타입 : 모든 객체는 속성을 상속하는 프로토타입 객체에 연결되어 있음. 객체 리터럴로 생성되는 모든 객체는 Object속성인 prptotype(Object.prototype) 객체에 연결됨.
if(typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}

var another_stooge = Object.create(stooge);
// 프로토타입 연결은 값의 갱신에 영향을 받지 않음(객체 속성 읽을 때만 사용함)
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
console.log("another_stooge.profession:::" + another_stooge.profession) //actor

// 06. 리플렉션
console.log("typeof flight.number:::" + typeof flight.number); //number
console.log("typeof flight.status:::" + typeof flight.status); //string
console.log("typeof flight.arrival:::" + typeof flight.arrival); //object
console.log("typeof flight.manifest:::" + typeof flight.manifest); //undefined


console.log("typeof flight.toString:::" + typeof flight.toString); //function
console.log("typeof flight.constructor:::" + typeof flight.constructor); //function

//hasOwnProperty(객체에 특정 속성 있는지 확인 후 true, false값 반환) 메소드는 프로토타입 체인을 바라보지 않는다. (객체의 '자체 속성'이 맞는지 확인. 직접 객체에 정의된 속성만)
console.log("flight.hasOwnProperty('number'):::" + flight.hasOwnProperty('number')); //true
console.log("flight.hasOwnProperty('constructor'):::" + flight.hasOwnProperty('constructor')); //false


// 07. 열거 : for in 구문을 사용하면 객체 있는 모든 속성 이름 열거 할 수 있음. 필터링이 필요함. 일반적 방법은 hasOwnProperty 메소드와 함수를 배제하기 위한 typeof를 사용하는 것!
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log("name + ': ' + another_stooge[name]:::" + name + ': ' + another_stooge[name]); //Harry, Moses, Moe, GILDONG, actor
    }
}

//열거되기 원하는 순서를 배열로 지정 : 원하는 순서대로 속성 리플렉션
var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i += 1) {
    console.log('properties[i] : another_stooge[properties[i]]', properties[i] + ': ' + another_stooge[properties[i]]); //first-name: Harry, middle-name: Moses, last-name: GILDONG,profession: actor
}

console.log("Last name checked::::", name);


// 08. 삭제 : delete 연산자. 해당 속성이 객체에 있을 경우에 작동. 프로토타입 연결 상에 있는 객체들에는 접근하지 않음.
console.log("another_stooge.nickname:::" + another_stooge.nickname); //Moe

delete another_stooge.nickname; //another_stooge에서 nickname을 제거하면 프로토타입에 있는 nickname을 반환

console.log("another_stooge.nickname:::" + another_stooge.nickname); //Curly


// 09. 최소한의 전역변수 사용 : 전역변수는 가능하면 피하자. 프로그램의 유연성을 약화시킨다.
var MYAPP = {}; // 이 변수를 다른 전역변수들의 컨테이너로 사용!

MYAPP.stooge = {
    "first-name": "HONG",
    "last-name": "GILDONG"
}

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2024-10-08 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2024-11-08 10:42",
        city: "Los angeles"
    }
}

//이렇게도 작성하는 구나..! 명시적으로 전역변수라는 것을 나타내고 있어 가독성이 높아짐.