let score=[0,0];function play(type){
let g=Math.floor(Math.random()*10)+1;if(type==='pass'){g+=Math.floor(Math.random()*5);}
score[0]+=g>7?7:0;document.getElementById('score').textContent=`${score[0]} - ${score[1]}`;
let log=document.getElementById('log');log.innerHTML+=`Play: ${type} gained ${g} yards.<br>`;}