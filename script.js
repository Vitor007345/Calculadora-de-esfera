var comp;
var area;
var vol;

const inputRaio = document.getElementById('inputRaio');
const btcalcular = document.getElementById('btcalcular');


function calcular(CAV, raio){
    raio = parseFloat(raio);
    switch(CAV){
        case 'C':
            var C;
            C = 2*raio*Math.PI;
            console.log(`Comprimento calculado: ${C}`);
            return C;
        case 'A':
            var A;
            A = Math.pow(raio, 2) * Math.PI;
            console.log(`Área calculada: ${A}`);
            return A;
        case 'V':
            var V;
            V =  Math.pow(raio, 3) * Math.PI * (4/3);
            console.log(`Volume calculado: ${V}`);
            return V;
            break;
    }
    

}
function printAll(){
    const Pcomp = document.getElementById('comprimento');
    const Parea = document.getElementById('area');
    const Pvol = document.getElementById('volume');
    Pcomp.innerHTML = `O comprimento é: <span class="valor">${comp.toFixed(2)}</span>`;
    Parea.innerHTML = `A área é: <span class="valor">${area.toFixed(2)}</span>`;
    Pvol.innerHTML = `O volume é: <span class="valor">${vol.toFixed(2)}`;

}


function lerRaio() {
    let raio = parseFloat(inputRaio.value);
    if(isNaN(raio)){
        console.log("Valor lido não é um número");
        alert("Valor não é um número");
        
    }else{
        console.log(`Valor salvo como: ${raio}`);
        comp = calcular('C', raio);
        area = calcular('A', raio);
        vol = calcular('V', raio);
        printAll();
    }
    

}


btcalcular.addEventListener('mouseup', function(){
    btcalcular.classList.remove('press');
})
btcalcular.addEventListener('mousedown', function(){
    btcalcular.classList.add('press');
    lerRaio();
})

inputRaio.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        lerRaio();
    }

})

