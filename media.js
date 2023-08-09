const input = require('readline-sync').question
const fs = require('fs')
function media(){
    var nota  = (input("id: "))
    let leitor = fs.readFileSync("banco.csv",{encoding: "utf-8"})
    console.log(nota)
    console.log(leitor)
    let lista = leitor.split("\n")
    let a = 2
    while(a<lista.length){
       let d = lista[a].split(";")
       let h = d [0]
       console.log("id",h)
    }

}
media()