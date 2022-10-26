/**
 * 조건문 switch
 */

// switch 는 함수로 생각하면 기억하기 쉽네 
// 함수내부에서는 case xxx : 로 접근 함



const number =5;
let msg = '';
switch(number){
    case 1 : msg = '1 입니다'; break;
    case 2 : msg = '2 입니다'; break;
    case 3 : msg = '3 입니다'; break;
    case 4 : msg = '4 입니다'; break;
    case 5 : msg = '5 입니다'; break;
    default :
        msg='error 입니다';
}

console.log(msg);