var input = document.querySelector('#modify');
var shadow = document.querySelector('.shadow');
input.addEventListener('mouseover',function(){
  shadow.style.display = 'flex';
})
input.addEventListener('mouseleave',function(){
  shadow.style.display = 'none';
})
