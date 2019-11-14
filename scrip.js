

function carregar(){

    var msg = window.document.getElementById('msg');;
    var img = window.document.getElementById('fundo');

    var data = new Date();
    var hora = data.getHours();
    var minuts = data.getMinutes();

    if (minuts >= 0 && minuts <12){

        var img2 = window.document.getElementById('imagem2');
        img2.src = 'Manha.jpg'
      
    }else if (minuts >= 12 && minuts <18){

        var img2 = window.document.getElementById('imagem2');
        img2.src = 'Tarde.jpg'
    }else{

        var img2 = window.document.getElementById('imagem2');
        img2.src = 'Noite.jpg'
    }
}


function PassarMouseInicio(){
    var img = window.document.getElementById('imagem');
    img.src = 'Ctodos.png'
}

function PassarMouseCasas(){
    var img = window.document.getElementById('imagem');
    img.src = 'Ccasa.png'
}

function PassarMouseTerrenos(){
    var img = window.document.getElementById('imagem');
    img.src = 'Cterreno.png'
}

function PassarMouseApartamentos(){
    var img = window.document.getElementById('imagem');
    img.src = 'Capartamento.png'
}

function PassarMouseTodos(){
    var img = window.document.getElementById('imagem');
    img.src = 'Ctodos.png'
}

function PassarMouseContato(){
    var img = window.document.getElementById('imagem');
    img.src = 'Ccontato.png'
}
