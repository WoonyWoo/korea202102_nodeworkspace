/*모듈은 변수, 함수 등의 코드를 모아놓고 파일로 저장한 단위
개발자가 모듈을 정의할때는 내장객체 중 exports 객체를 사용하면 됨
*/

//getMsg 메서드를 현재 모듈안에 정의한다!!
exports.getMsg=function(str){
    return str;
}

exports.getRandom=function(n){
    var r=parseInt(Math.random()*n);//0.000xxx ~ 1 미만 사이의 난수 발생시켜줌
    // console.log(r);
    return r;
}

/*-----------------------------------
자리수 처리 함수
한자리수의 경우 앞에 0붙이기!!
-----------------------------------*/
exports.getZeroString=function(n){
    var result=(n>=10)?n:"0"+n;
    return result;
}