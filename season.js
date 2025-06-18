function simulate(){fetch('teams.json').then(r=>r.json()).then(data=>{
 const res=document.getElementById('results');res.innerHTML='';data.forEach(t=>{
  const wins=Math.floor(Math.random()*17);res.innerHTML+=`${t.teamName}: ${wins}-${17-wins}<br>`;});});}