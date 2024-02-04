let a = parseInt(prompt("Unesi prvi broj"))
let b = parseInt(prompt("Unesi drugi broj"))        
let op = prompt("Unesi operaciju '+' , '-' , '*' , '/'")

    if(op !== "+" && op !== "-" && op !== "*" && op !== "/"){
        alert("Uneli ste pogresne operacije!")
        }else if(isNaN(a) || isNaN(b)){
            alert("Niste unijeli broj!")
        }else{
            if(op === "+"){
                let rezultat = a + b
                alert(a + " + " + b + " = " + rezultat)
            }else if(op === "-"){
                let rezultat = a - b
                alert(a + " - " + b + " = " + rezultat)
            }else if(op === "*"){
                let rezultat = a * b
                alert(a + " * " + b + " = " + rezultat)
            }else if(op === "/"){
                let rezultat = a / b
                alert(a + " / " + b + " = " + rezultat)
            }
        }