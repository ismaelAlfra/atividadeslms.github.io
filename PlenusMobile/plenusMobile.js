let subOpcoes = document.querySelectorAll(".sub-opcoes");
let opcoes = document.querySelector(".opcoes");
let txt = opcoes.querySelectorAll("h1");


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
let proxRo = rotina.querySelector(".proximo");
let cancelRo = rotina.querySelector(".cancelar");

let deixa = document.querySelector("#deixa");
let input_deixa = deixa.querySelectorAll("input");
let proxDe = deixa.querySelector(".proximo");
let cancelDe = deixa.querySelector(".cancelar");


let recom = document.querySelector("#recompensa");
let input_recom = recom.querySelectorAll("input");
let proxRe = recom.querySelector(".proximo");
let cancelRe = recom.querySelector(".cancelar");


let cancelar = document.querySelector(".cancelar");

console.log(input_rotina);

add.addEventListener("click", function(){
    rotina.style.height = "80%";
    rotina.style.width = "100%";
    rotina.style.opacity = "1";
})
cancelar.addEventListener("click", function(){
    rotina.style.height = "0";
    rotina.style.width = "0";
    rotina.style.opacity = "0";
})
function aparecer(){
    let aux = 0;
    for(i of input_rotina){
       
        if(i.value == ""){
            aux++;
        }
    }
    if(aux == 0){
        prox.style.display = "flex";
    }
    else if(aux != 0){
        prox.style.display = "none";  
    }
    
}
function comport(dados, etapa1, etapa2){
    for(i of dados){
        if(i.value == ""){
            alert("Preencha todos os campos");
            break;
            
        }
        else{
            let aux = 0;
            for(i of dados){
       
                if(i.value == ""){
                    aux++;
                }
            }
            if(aux == 0){
                etapa2.style.width = "100%";
                etapa2.style.height = "80%";
                etapa2.style.opacity = "1" ;
                etapa1.style.width = "0";
                etapa1.style.height = "0";
                etapa1.style.opacity = "0" ;
            
        }
    }
}
}
let sele = rotina.querySelector("select");
let opt = sele.querySelectorAll("option");
console.log(opt);

function voltar(cancel, etapa1, etapa2){
    cancel.addEventListener("click", function(){
        console.log("qualquer coisa");
        etapa2.style.width = "0";
        etapa2.style.height = "0" ;
        etapa2.style.opacity = "0" ;
        etapa1.style.width = "100%";
        etapa1.style.height = "80%";
        etapa1.style.opacity = "1" ;
    })
}
proxRo.addEventListener("click", function(){
    comport(input_rotina, rotina, deixa);

});
proxDe.addEventListener("click", function(){
    comport(input_deixa, deixa, recom);
});
proxRe.addEventListener("click", function(){
    let categoria = "";
    for(i of opt){
        if(i.selected == true){
            categoria = i.value;
        }
    }
    $.ajax({
    type:'POST',
    url: 'http://localhost:3000/habitos',
    data: {nome: input_rotina[0].value,
        categoria: categoria, fazer: input_rotina[1].value, 
        porque: input_rotina[2].value},

    success: function(){
        console.log("foi");
    }
})
})


voltar(cancelDe, rotina, deixa);
voltar(cancelRe, deixa, recom);
select();
