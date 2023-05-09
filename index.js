const clock = document.querySelector(".h1clock"); //오른쪽의 변수를 clock 변수에 담는다 h1clock의 클래스를 가지는 태그를 가져옴


function getTime() {
    const time = new Date();
    const hour = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    clock.innerHTML = `
    ${hour < 13 ? '오전' : '오후'}
    ${hour<10 ? `0${hour}` : hour} : 
    ${minutes<10 ? `0${minutes}` : minutes} : 
    ${seconds<10 ? `0${seconds}` : seconds}`;
    
    for(i=0;i<10;i++) {
        
    }
    // ?는 삼항연산자 => 조건 ? 참 : 거짓
}
function loop() {
    setInterval(getTime, 1000);        //함수, 1000s/m 1초 마다 한번씩 새로고침 해줌
}
loop()