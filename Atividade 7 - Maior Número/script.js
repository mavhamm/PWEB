alert("oi");

function maiorNum() {
    
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);
    const maiorr = maiorN(n1, n2, n3);
    const resultado = document.getElementById('resultado');
    resultado.innerText = maiorr;
}

function maiorN(n1, n2, n3) {
    return Math.max(n1,n2,n3)
}