const input = require('readline-sync').question
const banco = require('fs')
function lista(){
    var pessoa  = (input("id: "))
        let leitor = banco.readFileSync("banco.csv",{encoding: "utf-8"})
    console.log(leitor)
    let c = leitor.split("\n")
    let a = 2
    while(a<c.length){
        let d = c[a].split(";")

        let h = d[0]
        console.log("id:" , h)
        a++
    
        if(pessoa == h){
            console.log(":)")
        }
    }
    
    
}
lista()