const botoes = document.querySelectorAll(".botao");
const conteudo = document.querySelectorAll(".abas-conteudo");
const tempo = document.querySelectorAll(".contador");
tempo[0].textContent="ola"
const tempoObjetivo1= new Date(2025,11,25,23,59,59);
const tempoObjetivo2= new Date(2025,11,26,23,59,59);
const tempoObjetivo3= new Date(2025,11,27,23,59,59);
const tempoObjetivo4= new Date(2025,11,28,23,59,59);
const agora= new Date();
let segundos;
let minitos
let horas;
let dias;

tempo[1].textContent=agora;
tempo[0].textContent= tempoObjetivo1-agora
segundos=(tempoObjetivo1-agora)/1000;
minitos=segundos/60;
horas=minutos/60;
dias=horas/24;
console.log(tempo);
console.log(botoes);
for(let i=0; i <botoes.length; i++){
   botoes[i].onclick = function(){
   for(j=0; j<botoes.length;j++){
       botoes[j].classList.remove("ativo");
       conteudo[j].classList.remove("ativo");
   }
   botoes[i].classList.add("ativo");
   conteudo[i].classList.add("ativo");
   }

}
