function simulate(){
fetch('teams.json').then(r=>r.json()).then(data=>{
let results=document.getElementById('results');data.forEach(t=>{
let wins=Math.floor(Math.random()*17);results.innerHTML+=`${t.teamName}: ${wins}-`+(17-wins)+'<br>';});});