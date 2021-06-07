
    let color0 = document.getElementsByClassName('color')[0];
    color0.style.backgroundColor = 'black';

    let color1 = document.getElementsByClassName('color')[1];
    color1.style.backgroundColor = 'yellow';

    let color2 = document.getElementsByClassName('color')[2];
    color2.style.backgroundColor = 'blue';

    let color3 = document.getElementsByClassName('color')[3];
    color3.style.backgroundColor = 'purple';
    
    // 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels

    document.getElementsByTagName('div')[1].classList.add('selected')
    
    // 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
    
    window.onload = function() { 
        
        
            color0.addEventListener('click', click)
            color1.addEventListener('click', click)
            color2.addEventListener('click', click)
            color3.addEventListener('click', click)

        let selectedClasse = document.querySelector('.selector')

        function click(){
            let clique = event.target
            
            
            let cores = document.getElementById('color-palette').children
           
            for (let index = 0; index <cores.length; index++) {
                let variasCores = cores[index];
                

                if(variasCores.classList.contains('selected')){
                    variasCores.classList.remove('selected')
                }                    
            }
            clique.classList.add('selected')
        }

        
        
        let tabelaPixel = document.getElementById('pixel-board')
        tabelaPixel.addEventListener('click', pintarPixels)

        console.log(tabelaPixel)

       function pintarPixels(){
            let click = event.target 
            
            let color = document.querySelector('.selected').style.backgroundColor
            console.log(color)
            
            click.style.backgroundColor = color
        }
    }
        let button = document.getElementById('clear-board')
        button.addEventListener('click', botao)

        function botao(params) {
            let pixel = document.getElementsByClassName('pixel')
            
            
            for (let index = 0; index < pixel.length; index+=1) {
                pixel[index].style.backgroundColor = 'white'                
            }
        }