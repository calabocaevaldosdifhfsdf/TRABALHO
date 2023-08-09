const input = require('readline-sync').question
const fs = require('fs')
function media(){
    // var nota  = (input("id: "))
    let leitor = fs.readFileSync("banco.csv",{encoding: "utf-8"})
    // console.log(nota)
    console.log(leitor)
    let lista = leitor.split("\n")
    let a = 2
    const valor = []
    while(a<lista.length){
        let d = lista[a].split(";")
        
        let h = d[4]
        var number = parseFloat(h)
        valor.push(number)
        
        a++
    }
    console.log("nota:", valor)

    var posição = 0
for (var perc = 0; perc < valor.length; perc++){
    posição = posição + valor[perc]
}
console.log(posição)

var dividido = posição / perc
console.log(dividido)

}

media()




