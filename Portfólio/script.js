function clickescolaridade() {
	
	if (document.getElementById("EscolaridadeContainer").style.display == "block"){
		document.getElementById("EscolaridadeContainer").style.display = "none"
		document.getElementById("escolaridade").innerHTML = "Escolaridade (+)"
	}else{
		document.getElementById("EscolaridadeContainer").style.display = "block"
		document.getElementById("escolaridade").innerHTML = "Escolaridade (-)"
	}
}