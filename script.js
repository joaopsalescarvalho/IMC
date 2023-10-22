const screen1 = document.getElementById('screen1')
const screen2 = document.getElementById('screen2')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const res = document.getElementById('res')
const botaoConfirmar= document.getElementById('confirmar')
const botaoVoltar = document.getElementById('voltar')

peso.addEventListener('input',validatepeso)
altura.addEventListener('input',validatealtura)
botaoConfirmar.addEventListener('click',nextScreen)
botaoVoltar.addEventListener('click',prevScreen)

function validatepeso(){
    if(peso.value == 0){
        peso.style.border='2px solid red'
        peso.placeholder='Adicione um peso'
    }else{
        peso.style.border=''
        peso.placeholder=''
}
}
function validatealtura(){
    if(altura.value == 0){
        altura.style.border='2px solid red'
        altura.placeholder='Adicione uma altura'
    }else{
        altura.style.border=''
        altura.placeholder=''
}
}
function nextScreen(){
    if(altura.value == 0 || peso.value == 0){
    validatepeso()
    validatealtura()
    }else{
    let n1 =Number(peso.value);
    let n2 =Number(altura.value);
    const imc = (n1 / (n2 * n2)).toFixed(1);
    screen1.style.display='none';
    screen2.style.display='block';
    res.innerHTML=`Seu IMC: ${imc}`;
    }
}
function prevScreen(){
    screen1.style.display='block';
    screen2.style.display='none';
}