
let i = 0
let write = true
let Hello = true
let TextoFinal = "Esse é Ryan..."
let textoCortado = ''
function textAnimation(){
    if(write){
        TextWrite()
    }
    else{
        TextErase()
    }
}

function TextWrite(){
    let texto = document.getElementById("TextAnimation")
    if(i < TextoFinal.length && write){
        texto.textContent += TextoFinal[i]
        i++
        setTimeout(textAnimation, 50)
    }else{
        write = false
        setTimeout(textAnimation, 5000)
    }
}

function TextErase(){
    let texto = document.getElementById("TextAnimation")
    if(i == 0){
        texto.textContent = texto.textContent.slice(0,i)
        write = true
        setTimeout(textAnimation, 1000)
    }else{
        texto.textContent = texto.textContent.slice(0,i)
        i--
        setTimeout(textAnimation, 50)
    }
}