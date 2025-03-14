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
            V =  Math.pow(raio, 3) * Math.PI * (3/4);
            console.log(`Volume calculado: ${V}`);
            return V;
            break;
    }
    

}


function lerRaio() {
    var raio = parseFloat(document.getElementById('inputRaio').value);
    if(isNaN(raio)){
        console.log("Valor lido não é um número");
        alert("Valor não é um número");
        
    }else{
        console.log(`Valor salvo como: ${raio}`);
        var comp = calcular('C', raio);
        var area = calcular('A', raio);
        var vol = calcular('V', raio);
    }
    

}
const btcalcular = document.getElementById('btcalcular');

btcalcular.addEventListener('mouseup', function(){
    btcalcular.classList.remove('press');
})
btcalcular.addEventListener('mousedown', function(){
    btcalcular.classList.add('press');
    lerRaio();
})