function loadpage(){
    textAnimation() 
    isOnScreen()
}



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

function isOnScreen(){
    const observer = new IntersectionObserver (entries => {
        Array.from(entries).forEach(entry => {
            if (entry.intersectionRatio == 0.5) { 
                console.log('comeco')
        }
        })
        }, {
        threshold: [0, .5, 1]
        })
    
        Array.from(document.querySelectorAll('#skills')).forEach(element => {
        observer.observe(element)
        })
}




// $(window).on("scroll load",function(){
// 	var aparecer = 50; // porcentagem (neste caso, é a metade, 50%)
// 	var eleHeight = $('#teste').outerHeight(); // altura da div
// 	var eleTopo = $('#teste').offset().top; // distancia da div ao topo do documento
// 	var scrlTopo = $(window).scrollTop(); // quanto foi rolada a janela
// 	var distance = eleTopo-scrlTopo; // distancia da div ao topo da janela
// 	var altJanela = window.innerHeight; // altura da janela

// 	if(distance <= altJanela-(eleHeight*(aparecer/100))) {
// 		console.log('Visivel')

//     }
// });