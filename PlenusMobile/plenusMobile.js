let subOpcoes = document.querySelectorAll(".sub-opcoes");
let opcoes = document.querySelector(".opcoes");
let txt = opcoes.querySelectorAll("h1");
let inicial = document.querySelector(".inicial");


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
    inicial.addEventListener("click", function(){
        for(i of subOpcoes){
            i.classList.remove("abrir");
        }
    }) 
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
let botao_final = recom.querySelector(".proximo");
let cancelRe = recom.querySelector(".cancelar");
console.log(input_recom);


let cancelar = document.querySelector(".cancelar");

console.log(input_rotina);
console.log(input_deixa);

// add.addEventListener("click", function(){
//     rotina.style.height = "80%";
//     rotina.style.width = "100%";
//     rotina.style.opacity = "1";
// })
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
let seleRe = recom.querySelector("select");
let optRe = seleRe.querySelectorAll("option");

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
let recom1 = document.querySelector("#recompensa1");
let metas = recom1.querySelectorAll("input");
let tempo = document.querySelectorAll("#tempo");
let cont = document.querySelector("#cont");
let dete = document.querySelector("#dete");
let etapa1 = "planejamento";
let etapa2 = "executar";
let exe_botao = document.querySelector(".exe-botao");

dete.addEventListener("click", function(){
    for(i of tempo){
        i.style.display = "block";
    }
})
cont.addEventListener("click", function(){
    for(i of tempo){
        i.style.display = "none";
    }
})
let salvar = recom.querySelector(".proximo");
add.addEventListener("click", function(){
    botao_final.setAttribute('id', "salvar");
    salvar = recom.querySelector("#salvar");
   
    rotina.style.height = "80%";
    rotina.style.width = "100%";
    rotina.style.opacity = "1";
    adicionar(salvar, etapa1);
})
function adicionar(botao, etapa){
    botao.addEventListener("click", function(){
        let categoria = "";
        for(i of opt){
            if(i.selected == true){
                categoria = i.value;
            }
        }
        let dia = [];
        for(x of input){
            if(x.checked == true){
                dia.push(x.value);
            }
        }
        let dia1 = "";
        let dia2 = "";
        let dia3 = "";
        let dia4 = "";
        let dia5 = "";
        let dia6 = "";
        let dia7 = "";
        for(let i = 0; i < dia.length; i++){
            if(i == 0){
                dia1 = dia[0];
            }
            if(i == 1){
                dia2 = dia[1];
            }
            if(i == 2){
                dia3 = dia[2];
            }
            if(i == 3){
                dia4 = dia[3];
            }
            if(i == 4){
                dia5 = dia[4];
            }
            if(i == 5){
                dia6 = dia[5];
            }
            if(i == 6){
                dia7 = dia[6];
            }
            
        }
        let meta = "";
        for(y of metas){
            if(y.checked == true){
                meta = y.value;
            }
        }
        let periodo = "";
        for(z of optRe){
            if(z.selected == true){
                periodo = z.value;
            }
        }
        $.ajax({
        type:'POST',
        url: 'http://localhost:3000/habitos',
        data: {nome: input_rotina[0].value,
            categoria: categoria, fazer: input_rotina[1].value, 
            porque: input_rotina[2].value, 
            lugar: input_deixa[0].value, 
            horario: input_deixa[8].value, 
            reforco: input_deixa[9].value, 
            lembrete: input_deixa[10].value,
            etapa: etapa},    

        success: function(){
            event.preventDefault();
            console.log("foi");
            retornar();
        }
    })
        $.ajax({
        type:'POST',
        url: 'http://localhost:3000/metas',
        data: {meta: meta, periodo: periodo, unidade: input_recom[2].value, 
            pretende: input_recom[3].value, recompensa: input_recom[4].value},
        
        success: function(){
            event.preventDefault();
            console.log("foi");
            retornar();
        }
    })
    $.ajax({
        type:'POST',
        url: 'http://localhost:3000/dias',
        data: {dia1, dia2, dia3, dia4, dia5, dia6, dia7},
        
        success: function(){
            event.preventDefault();
            console.log("foi");
            retornar();
        }
    })


    })
}

// adicionar(salvar, etapa1);
adicionar(exe_botao, etapa2);

function retornar(){
    $.ajax({
    type: "GET",
    url: 'http://localhost:3000/habitos',
    success: function(data){
        console.log(data);
        console.log(data.categoria);
        addHabito(data);
    }
    });
}
function preencher(id){
    $.ajax({
        type: "GET",
        url : 'http://localhost:3000/habitos/'+id,
        success: function(data){
            input_rotina[0].value = data.nome;
            for(i of opt){
                if(i.value == data.categoria){
                    i.selected = true;
                }
            }
            input_rotina[1].value = data.fazer;
            input_rotina[2].value = data.porque;
            input_deixa[0].value = data.lugar;
            input_deixa[8].value = data.horario;
            input_deixa[9].value = data.reforco; 
            input_deixa[10].value = data.lembrete;
            etapa = data.etapa;
        }
        })
        $.ajax({
        type: "GET",
        url : 'http://localhost:3000/metas/'+id,
        success: function(data){
            for(z of metas){
                if(z.value == data.meta){
                    z.checked = true;
            }
            for(a of optRe){
                if(a.selected == data.periodo){
                    a.selected = true;
                }
            }
            input_recom[2].value = data.unidade;
            input_recom[3].value = data.pretende;
            input_recom[4].value = data.recompensa;
        }}
        })
        $.ajax({
        type: "GET",
        url : 'http://localhost:3000/dias/'+id,
        success: function(data){
            for(x of input){
                if(x.value == data.dia1){
                    x.checked = true;
                }
                if(x.value == data.dia2){
                    x.checked = true;
                }
                if(x.value == data.dia3){
                    x.checked = true;
                }
                if(x.value == data.dia4){
                    x.checked = true;
                }
                if(x.value == data.dia5){
                    x.checked = true;
                }
                if(x.value == data.dia6){
                    x.checked = true;
                }
                if(x.value == data.dia7){
                    x.checked = true;
                }
            }
        }
    })
    
}

function editar(id){
    rotina.style.height = "80%";
    rotina.style.width = "100%";
    rotina.style.opacity = "1";
    preencher(id)
    botao_final.setAttribute('id', 'atualizar');
    let atualizar = recom.querySelector("#atualizar");

   

atualizar.addEventListener("click", function(){
    let categoria = "";
    for(i of opt){
        if(i.selected == true){
            categoria = i.value;
        }
    }
    
    let meta = "";
    for(y of metas){
        if(y.checked == true){
            meta = y.value;
        }
    }
    let periodo = "";
    for(z of optRe){
        if(z.selected == true){
            periodo = z.value;
        }
    }
    let dia = [];
    for(x of input){
        if(x.checked == true){
            dia.push(x.value);
        }
    }
    let dia1 = "";
    let dia2 = "";
    let dia3 = "";
    let dia4 = "";
    let dia5 = "";
    let dia6 = "";
    let dia7 = "";
    for(let i = 0; i < dia.length; i++){
        if(i == 0){
            dia1 = dia[0];
        }
        if(i == 1){
            dia2 = dia[1];
        }
        if(i == 2){
            dia3 = dia[2];
        }
        if(i == 3){
            dia4 = dia[3];
        }
        if(i == 4){
            dia5 = dia[4];
        }
        if(i == 5){
            dia6 = dia[5];
        }
        if(i == 6){
            dia7 = dia[6];
        }
        
    }
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/metas/'+id,
    data: {meta: meta, periodo: periodo, unidade: input_recom[2].value, 
            pretende: input_recom[3].value, recompensa: input_recom[4].value},

    })
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/dias/'+id,
    data: {dia1, dia2, dia3, dia4, dia5, dia6, dia7},

    })
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/habitos/'+id,
    data:{nome: input_rotina[0].value,
        categoria: categoria, fazer: input_rotina[1].value, 
        porque: input_rotina[2].value, 
        lugar: input_deixa[0].value, 
        horario: input_deixa[8].value, 
        reforco: input_deixa[9].value, 
        lembrete: input_deixa[10].value,
        etapa: etapa}, 
    success: function(){
        console.log("salvo");
    }
    })
})

exe_botao.addEventListener("click", function(){
    let categoria = "";
    for(i of opt){
        if(i.selected == true){
            categoria = i.value;
        }
    }
    
    let meta = "";
    for(y of metas){
        if(y.checked == true){
            meta = y.value;
        }
    }
    let periodo = "";
    for(z of optRe){
        if(z.selected == true){
            periodo = z.value;
        }
    }
    let dia = [];
    for(x of input){
        if(x.checked == true){
            dia.push(x.value);
        }
    }
    let dia1 = "";
    let dia2 = "";
    let dia3 = "";
    let dia4 = "";
    let dia5 = "";
    let dia6 = "";
    let dia7 = "";
    for(let i = 0; i < dia.length; i++){
        if(i == 0){
            dia1 = dia[0];
        }
        if(i == 1){
            dia2 = dia[1];
        }
        if(i == 2){
            dia3 = dia[2];
        }
        if(i == 3){
            dia4 = dia[3];
        }
        if(i == 4){
            dia5 = dia[4];
        }
        if(i == 5){
            dia6 = dia[5];
        }
        if(i == 6){
            dia7 = dia[6];
        }
        
    }
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/metas/'+id,
    data: {meta: meta, periodo: periodo, unidade: input_recom[2].value, 
            pretende: input_recom[3].value, recompensa: input_recom[4].value},

    })
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/dias/'+id,
    data: {dia1, dia2, dia3, dia4, dia5, dia6, dia7},

    })
    $.ajax({
    type: "PUT",
    url: 'http://localhost:3000/habitos/'+id,
    data:{nome: input_rotina[0].value,
        categoria: categoria, fazer: input_rotina[1].value, 
        porque: input_rotina[2].value, 
        lugar: input_deixa[0].value, 
        horario: input_deixa[8].value, 
        reforco: input_deixa[9].value, 
        lembrete: input_deixa[10].value,
        etapa: etapa2}, 
          

    success: function(){
        console.log("salvo");
    }
    })
})
}
function executarBotao(id){
    let exe_botao2 = document.querySelectorAll("#executar");

    for(let i = 0; i < exe_botao2.length; i++){
        preencher(id);
        exe_botao2[i].addEventListener("click", function(){
            
            console.log("clicou");
            let categoria = "";
            for(i of opt){
                if(i.selected == true){
                    categoria = i.value;
                }
            }
            
            let meta = "";
            for(y of metas){
                if(y.checked == true){
                    meta = y.value;
                }
            }
            let periodo = "";
            for(z of optRe){
                if(z.selected == true){
                    periodo = z.value;
                }
            }
            let dia = [];
            for(x of input){
                if(x.checked == true){
                    dia.push(x.value);
                }
            }
            let dia1 = "";
            let dia2 = "";
            let dia3 = "";
            let dia4 = "";
            let dia5 = "";
            let dia6 = "";
            let dia7 = "";
            for(let i = 0; i < dia.length; i++){
                if(i == 0){
                    dia1 = dia[0];
                }
                if(i == 1){
                    dia2 = dia[1];
                }
                if(i == 2){
                    dia3 = dia[2];
                }
                if(i == 3){
                    dia4 = dia[3];
                }
                if(i == 4){
                    dia5 = dia[4];
                }
                if(i == 5){
                    dia6 = dia[5];
                }
                if(i == 6){
                    dia7 = dia[6];
                }
                
            }
            $.ajax({
            type: "PUT",
            url: 'http://localhost:3000/metas/'+id,
            data: {meta: meta, periodo: periodo, unidade: input_recom[2].value, 
                    pretende: input_recom[3].value, recompensa: input_recom[4].value},

            })
            $.ajax({
            type: "PUT",
            url: 'http://localhost:3000/dias/'+id,
            data: {dia1, dia2, dia3, dia4, dia5, dia6, dia7},

            })
            $.ajax({
            type: "PUT",
            url: 'http://localhost:3000/habitos/'+id,
            data:{nome: input_rotina[0].value,
                categoria: categoria, fazer: input_rotina[1].value, 
                porque: input_rotina[2].value, 
                lugar: input_deixa[0].value, 
                horario: input_deixa[8].value, 
                reforco: input_deixa[9].value, 
                lembrete: input_deixa[10].value,
                etapa: etapa2}, 
                

            success: function(){
                console.log("salvo");
            }
            })
        })
    }
}
function resetar(){
        input_rotina[0].value = "";
        for(i of opt){
            i.selected = false;
        }
        input_rotina[1].value = "";
        input_rotina[2].value = "";
        input_deixa[0].value = "";
        
        input_deixa[8].value = "";
        input_deixa[9].value = ""; 
        input_deixa[10].value = "";
        for(z of metas){
            z.checked = false;
        }
        for(a of optRe){
            a.selected = false;
            
        }
        input_recom[2].value = 0;
        input_recom[3].value = "";
        input_recom[4].value = "";
        for(x of input){
            x.checked = false;
    }
}
cancelRo.addEventListener("click", function(){
    resetar();
})
function apagar(id){
    $.ajax({
    type: "DELETE",
    url:'http://localhost:3000/habitos/'+id,
    success: function(){
        console.log("apagado");
    }
    })
    $.ajax({
    type: "DELETE",
    url:'http://localhost:3000/metas/'+id,
    success: function(){
        console.log("apagado");
    }
    })
    $.ajax({
    type: "DELETE",
    url:'http://localhost:3000/dias/'+id,
    success: function(){
        console.log("apagado");
    }
    })
}

function addHabito(data){
    for(i of data){
        let habito = document.createElement("div");
        habito.setAttribute('id', i.id);
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let txt = document.createElement("h2");
        habito.classList.add("item-caixa");
        habito.classList.add("plan");
        habito.classList.add("first");
        img1.setAttribute('src', './midia/pontinhos.png');
       
        if(i.categoria == "alimentacao"){
            img2.setAttribute('src', './midia/alimentacao.png');
        }
        else if(i.categoria == "esporte"){
            img2.setAttribute('src', './midia/esporte.png');
        }
        else if(i.categoria == "estudo"){
            img2.setAttribute('src', './midia/estudo.png');
        }
        else if(i.categoria == "lazer"){
            img2.setAttribute('src', './midia/lazer.png');
        }
        else if(i.categoria == "prejudiciais"){
            img2.setAttribute('src', './midia/prejudiciais.png');
        }
        else if(i.categoria == "trabalho"){
            img2.setAttribute('src', './midia/trabalho.png');
        }
        img1.classList.add("pontos");
        let nome = document.createTextNode(i.nome);
        txt.appendChild(nome);
        habito.appendChild(img1);
        habito.appendChild(img2);
        habito.appendChild(txt);
        if(i.etapa == "planejamento"){
            let planejamento = document.querySelector("#planejamento");
            planejamento.appendChild(habito);
        }
        else if(i.etapa == "executar"){
            let andamento = document.querySelector("#andamento");
            andamento.appendChild(habito);
        }

        let modal = document.createElement("div");
        let modal2 = document.createElement("div");
        let habito_plan = document.createElement("div");
        let hab = document.createElement("h1");
        let editar = document.createElement("h2");
        let apagar = document.createElement("h2");
        let executar = document.createElement("h2");
        let txtHab = document.createTextNode(i.nome);
        let txtEdt = document.createTextNode("Editar");
        let txtApg = document.createTextNode("Apagar");
        let txtExe = document.createTextNode("Executar");
        hab.appendChild(txtHab);
        if(i.etapa == "planejamento"){
            hab.style.backgroundColor = "#FFAF7B";
        } else if(i.etapa == "executar"){
            hab.style.backgroundColor = "#4AADFF";
        }
        if(i.etapa == "planejamento"){
            editar.appendChild(txtEdt);
            apagar.appendChild(txtApg);
            executar.appendChild(txtExe);
            modal.classList.add("modal");
            habito_plan.classList.add("habito-plan");
            editar.classList.add("botoes");
            apagar.classList.add("botoes");
            modal2.classList.add("modal2");
            editar.setAttribute('id', 'editar');
            apagar.setAttribute('id', 'apagar');
            executar.setAttribute('id', 'executar');
            
            habito_plan.appendChild(hab);
            habito_plan.appendChild(editar);
            habito_plan.appendChild(apagar);
            habito_plan.appendChild(executar);
            modal.appendChild(modal2);
            habito_plan.setAttribute('id', i.id);
            modal.appendChild(habito_plan);
            modal.setAttribute('id', i.id);
            let body = document.querySelector("body");
            body.appendChild(modal);
        }
        else if(i.etapa == "executar"){
            editar.appendChild(txtEdt);
            apagar.appendChild(txtApg);
            executar.appendChild(txtExe);
            habito_plan.classList.add("habito-plan");
            editar.classList.add("botoes");
            apagar.classList.add("botoes");
            modal2.classList.add("modal2");
            editar.setAttribute('id', 'editar');
            apagar.setAttribute('id', 'apagar');

            modal.classList.add("exe");
            habito_plan.classList.add("habito-plan");
            editar.classList.add("botoes");
            apagar.classList.add("botoes");
            modal2.classList.add("modal2");
            habito_plan.appendChild(hab);
            habito_plan.appendChild(editar);
            habito_plan.appendChild(apagar);
            modal.appendChild(modal2);
            habito_plan.setAttribute('id', i.id);
            modal.appendChild(habito_plan);
            modal.setAttribute('id', i.id);
            let body = document.querySelector("body");
            body.appendChild(modal);
        }

        
        

    }
    let item_caixa = document.querySelectorAll(".item-caixa");

    let modal = document.querySelectorAll(".modal");
    console.log(modal);
    let modal2 = document.querySelectorAll(".modal2");
    let cont_exe = document.querySelectorAll(".exe");
    console.log(cont_exe);
    console.log(item_caixa);
    let apagar_botao = document.querySelectorAll("#apagar");
    let editar_botao = document.querySelectorAll("#editar");
    console.log(editar_botao);
    let andamento = document.querySelector("#andamento");
    let item_caixaAnd = andamento.querySelectorAll(".item-caixa");

    for(let i = 0; i < item_caixa.length; i++){
        item_caixa[i].addEventListener("click", function(){
            
            console.log("clicou");
            for(let j = 0; j < modal.length; j++){
                if(item_caixa[i].id == modal[j].id){
                    modal[j].style.width = "100%";
                    modal[j].style.height = "100%";
                    modal[j].style.opacity = "1";
                    executarBotao(item_caixa[i].id);
                    modal[j].children[0].addEventListener("click", function(){
                        modal[j].style.width = "0";
                        modal[j].style.height = "0";
                        modal[j].style.opacity = "0";
                        resetar();
                        
                })}
                
                modal[j].children[1].children[2].addEventListener("click", function(){
                    apagar(modal[j].id);
                })
                
                modal[j].children[1].children[1].addEventListener("click", function(){
                    modal[j].style.display = "0";
                    modal[j].style.height = "0";
                    modal[j].style.opacity = "0"; 
                    editar(modal[j].id);
                })
            }
        })

    }
    for(let i = 0; i < item_caixaAnd.length; i++){
        item_caixaAnd[i].addEventListener("click", function(){
            cont_exe[i].style.height = "100%";
            cont_exe[i].style.width = "100%";
            cont_exe[i].style.opacity = "1";
            cont_exe[i].children[0].addEventListener("click", function(){
                cont_exe[i].style.width = "0";
                cont_exe[i].style.height = "0";
                cont_exe[i].style.opacity = "0";
            })
            cont_exe[i].childNodes[1].childNodes[1].addEventListener("click", function(){
                cont_exe[i].style.width = "0";
                cont_exe[i].style.height = "0";
                cont_exe[i].style.opacity = "0";
                editar(cont_exe[i].id);
            })
            cont_exe[i].childNodes[1].childNodes[2].addEventListener("click", function(){
                apagar(cont_exe[i].id);
            })
        })
    }
}


// })
// }
// let body = document.querySelector("body");
// body.addEventListener("click", function(){
//     console.log("menino mago clicou");
// })
let days = document.querySelectorAll(".days");
console.log(days);
let cont_days = document.querySelector(".container-days");
// cont_days.addEventListener("scroll", function(){
//     console.log(cont_days.scrollLeft);
// })
for(let i = 0; i < days.length; i++){
    days[i].addEventListener("click", function(){
        days[i].classList.add("checado");
    })
}
let radio = document.querySelectorAll(".radio");
for(let i = 0; i < radio.length; i++){
    radio[i].addEventListener("click", function(){
        radio[i].style.backgroundColor = "#4A79DA";
        for(a of radio){
            if(a != radio[i]){
                a.style.backgroundColor = "transparent";
            }
        }
    })
}

retornar();
let dia_atual = new Date();
console.log(dia_atual.getDay());
voltar(cancelDe, rotina, deixa);
voltar(cancelRe, deixa, recom);
select();
// apagar(1);
