fetch('teams.json').then(r=>r.json()).then(data=>{
 let div=document.getElementById('rosters');
 data.forEach(t=>{
  let h=document.createElement('h2');h.textContent=t.teamName;div.appendChild(h);
  t.players.forEach(p=>{
    let pEl=document.createElement('p');pEl.textContent=`${p.name} - ${p.position} - Rating ${p.rating}`;
    div.appendChild(pEl);
  });
 });});