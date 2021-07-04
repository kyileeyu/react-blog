
document.getElementById('hello').innerHTML = '안녕';
document.getElementById('hi').innerHTML = '올때 바밤바';
// document.getElementById('hello').style.fontSize = '30px';

function offOn(x){
    document.getElementById('alert').style.display = x;
};

document.getElementById('close').addEventListener('click', function(){ //click 위치는 event 라고 말한다! scroll, mouseover 등등
     document.getElementById('alert').style.display = 'none';
});



 function onOff(x) {
     document.getElementById('id').innerHTML =x;
     document.getElementById('alert').style.display = 'block';
 };
//  0을 꼭 써줘야한다!!

$('#test').attr('class','yellow-bg');