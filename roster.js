fetch('teams.json').then(r=>r.json()).then(data=>{
 const div=document.getElementById('rosters');
 data.forEach(t=>{
  const h=document.createElement('h2');h.textContent=t.teamName;div.appendChild(h);
  t.players.forEach(p=>{
   const pEl=document.createElement('p');pEl.textContent=`${p.name} - ${p.position} (${p.rating})`;
   div.appendChild(pEl);
  });
 });});