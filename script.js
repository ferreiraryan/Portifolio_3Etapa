function loadpage(){
    textAnimation() 
    isOnScreen()
}


let i = 0
let write = true
let Hello = true
let TextoFinal = "Esse é Ryan..."
let textoCortado = ''
let lightmode = false

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
            if (entry.intersectionRatio >= 1) { 
                entry.target.classList.add('animacaoSkillBar')
            

            }else if(entry.intersectionRatio <= 0){
                entry.target.classList.remove('animacaoSkillBar')
            }
        })

        }, {
        threshold: [0, .5, 1]
        })
    
        Array.from(document.querySelectorAll('.BarSkillComplete')).forEach(element => {
        observer.observe(element)
        })
}

function ChangeThemeButton(){
    if(!lightmode){
        lightmode = true
        let modoAtual = document.querySelector('#SUN')
        let ProximoModo = document.querySelector('#MOON')
        modoAtual.classList.add('Mode')
        ProximoModo.classList.remove('Mode')
    }else{
        lightmode = false

        let modoAtual = document.querySelector('#MOON')
        let ProximoModo = document.querySelector('#SUN')
        modoAtual.classList.add('Mode')
        ProximoModo.classList.remove('Mode')
    }
    chageTheme(lightmode)
    
    console.log(lightmode)

}
// console.log(element)


function chageTheme(LIGHTMODE){
    let element = document.body;
    if(LIGHTMODE){
        element.className = 'whitemode'
    }else{
        element.className = 'darkmode'
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.secoes');

    // Função que verifica se uma section está visível na viewport
    function revealSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Verifica se a section está na área visível
            if (sectionTop < windowHeight - 100) {
                section.classList.add('secoes-visible');
            }
        });
    }

    // Executa a função ao carregar a página e ao rolar
    window.addEventListener('scroll', revealSection);
    revealSection(); // Para revelar as sections iniciais ao carregar a página
});

