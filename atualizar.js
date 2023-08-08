const input = require('readline-sync').question
const banco = require('fs')
const { isModuleNamespaceObject } = require('util/types')
function atualizar(){
    var pessoa  = (input("id: "))
    let leitor = banco.readFileSync("banco.csv",{encoding: "utf-8"})
    // console.log(leitor)
    let lista = leitor.split("\n")
    let a = 2
    while(a<lista.length){
        let d = lista[a].split(";")
        
        let h = d[0]
        // console.log("id:" , h)
        
        if(pessoa == h){
            console.log(d)
            var nome = (input("nome = "))
            var matricula =input("matricula = ")
            var idade = input("idade = ")
            var nota = input("nota = ")
            
            d[1] = nome
            d[2] = matricula
            d[3] = idade
            d[4] = nota
            let string = d.join(';')
            console.log(string)
            lista[a] = d
            // console.log(lista)
        }
        a++
    }
    
    banco.writeFileSync("banco.csv", lista.toString(), {flag: "w"})
    console.log(banco)
    
}
atualizar()



