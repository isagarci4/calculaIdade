function calculaIdade(){
    var dataNascimento = document.getElementById('dataNascimento').value;
    console.log(dataNascimento);
    var anoAtual = new Date().getFullYear()
    console.log(anoAtual)
    var anoNascimento = new Date(dataNascimento).getFullYear()
    console.log(anoNascimento)
    var idade = anoAtual - anoNascimento;
    
    if(!dataNascimento){
        alert("Insira a data de nascimento!");
        return;
    }
    document.querySelector('.apresentarIdade').innerHTML = "<p><strong>Você tem: </strong>" + idade + " anos</p>"
}