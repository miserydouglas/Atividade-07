function calcular(){
    var nome = document.getElementById("txtn1")
    var nascer = document.getElementById("txtn2")
    var res = document.getElementById("res")
    var nomecerto = String(nome.value)
    var n2 = Number(nascer.value)
    var s = 2020 - n2
    res.innerHTML= `Olá, o seu nome é  ${nomecerto}, e sua idade é ${s}`


}