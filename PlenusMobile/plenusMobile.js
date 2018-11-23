let subOpcoes = document.querySelectorAll(".sub-opcoes");
let opcoes = document.querySelector(".opcoes");
let txt = opcoes.querySelectorAll("h1");
console.log(txt);
console.log(subOpcoes);

function select(){
    for(let i = 0; i < txt.length;i++){
        if(txt[i].addEventListener("click", function(){
            txt[i].classList.add("selecionado");
            for(y of subOpcoes){
                if(y.id == txt[i].innerHTML){
                    y.classList.add("abrir");
            }
                else{
                    y.classList.remove("abrir");  
                }
        }

            for(x of txt){
                if(x.innerHTML != txt[i].innerHTML){
                    x.classList.remove("selecionado");
                }
            }
            
        })){

        }
    }
}
let dias = document.querySelector(".dias");
let input = dias.querySelectorAll("input");
let label = dias.querySelectorAll("label");
console.log(input);

function seleDias(){
    for(let i = 0; i < label.length; i++){
        if(label[i].addEventListener("click", function(){
            label[i].classList.add("apertado");
            for(x of label){
                if(x != label[i]){
                    x.classList.remove("apertado");
                }
            }
        })){
           

        }
    }
}


seleDias();
select();
