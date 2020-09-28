function media() {
    var n1 = prompt("Digite a 1a nota: ");
    var n2 = prompt("Digite a 2a nota: ");
    var n3 = prompt("Digite a 3a nota: ");
    
    media = (
        parseFloat(n1) + parseFloat(n2) + parseFloat(n3)  
    )
    media = media / 3
    
    alert(media);
}