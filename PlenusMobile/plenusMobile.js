let subOpcoes = document.querySelectorAll(".sub-opcoes");
let opcoes = document.querySelector(".opcoes");
let txt = opcoes.querySelectorAll("h1");
// console.log(txt);
// console.log(subOpcoes);

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
let add = document.querySelector(".add");
let rotina = document.querySelector("#rotina");
let input_rotina = rotina.querySelectorAll("input");
let cancelar = document.querySelector(".cancelar");
let prox = document.querySelector(".proximo");
console.log(input_rotina);

// function mouseDown(){
//     add.style.backgroundColor = "green";
//     // add.style.width = "30px";
//     // add.style.heigth = "30px";
// }
// function mouseUp(){
//     console.log("jcjc");
//     add.style.backgroundColor = "blue";
//     // add.style.heigth = "50px";
// }
add.addEventListener("click", function(){
    rotina.style.height = "80%";
    rotina.style.width = "100%";
    rotina.style.opacity = "1";
    // rotina.style.display = "block";
})
cancelar.addEventListener("click", function(){
    rotina.style.height = "0";
    rotina.style.width = "0";
    rotina.style.opacity = "0";
})
// function aparecer(){
//      let aux = 0;
//     for(i of input_rotina){
       
//         if(i.value == ""){
//             aux++;
//         }
//     }
//     if(aux == 0){
//         prox.style.display = "flex";
//     }
//     else if(aux != 0){
//         prox.style.display = "none";  
//     }
    
// }

prox.addEventListener("click", function(){
    for(i of input_rotina){
        if(i.value == ""){
            alert("Preencha todos os campos");
            break;
            i.placeholder = "*Preencha este campo";
        }
    }
})

select();
