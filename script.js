let red=document.querySelector('#red');
let green=document.querySelector('#green');
let blue=document.querySelector('#blue');
let opacity=document.querySelector('#opacity');
let box_content=document.querySelector('.box-content');
function color(){
  box_content.style.backgroundColor=`
  rgba(${parseInt(red.value)},${parseInt(green.value)},${parseInt(blue.value)},${opacity.value})
  `;
  element=`
  <p>Red =${red.value}</p>
  <p>Green =${green.value}</p>
  <p> Blue=${blue.value}</p>
  `;
  document.querySelector('.ul').innerHTML=element;
}
red.addEventListener('change',color)
green.addEventListener('change',color)
blue.addEventListener('change',color)
opacity.addEventListener('change',color)