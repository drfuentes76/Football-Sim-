let score=[0,0];function play(t){
let g=Math.floor(Math.random()*10)+1;if(t==='pass'){g+=Math.floor(Math.random()*5);}
score[0]+=g>7?7:0;document.getElementById('score').textContent=`${score[0]} - ${score[1]}`;
const log=document.getElementById('log');log.innerHTML+=`Play: ${t} gained ${g} yards.<br>`;}